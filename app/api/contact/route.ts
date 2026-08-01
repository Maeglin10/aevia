import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Simple in-memory rate limiter: max 3 contact submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 10 * 60_000; // 10 minutes
  const maxRequests = 3;
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + window });
    return false;
  }
  if (entry.count >= maxRequests) return true;
  entry.count += 1;
  return false;
}

/** Escape HTML special characters to prevent HTML injection in email body */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting — prevent contact form spam and email flooding
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Length guards to prevent email flooding with huge payloads
    if (typeof name !== "string" || name.length > 200) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (typeof message !== "string" || message.length > 5000) {
      return NextResponse.json({ error: "Message too long (max 5000 chars)" }, { status: 400 });
    }

    // Email validation — bound the input length BEFORE regex evaluation (RFC 5321 max
    // mailbox length) and use a regex where adjacent quantified groups can't overlap
    // (the domain label excludes ".") so matching stays linear, not polynomial.
    if (typeof email !== "string" || email.length > 254) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@.]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey && !resendKey.includes("REPLACE")) {
      // Send via Resend — all user-supplied values are HTML-escaped before injection
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      const safeName = escapeHtml(String(name));
      const safeEmail = escapeHtml(String(email));
      const safeSubject = escapeHtml(String(subject || "No subject"));
      const safeMessage = escapeHtml(String(message)).replace(/\n/g, "<br>");

      await resend.emails.send({
        from: "Aevia Contact <onboarding@resend.dev>",
        to: "v.milliand@gmail.com",
        // Reply goes straight to the prospect instead of the transactional
        // sender — one click to answer a lead. `email` is already validated above.
        replyTo: String(email),
        subject: subject ? `[Aevia] ${safeSubject}` : `[Aevia] Message de ${safeName}`,
        html: `
          <p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <hr />
          <p>${safeMessage}</p>
        `,
      });
    } else {
      // Fallback: log to console (never log raw user input to avoid log injection)
      console.log("[Contact Form]", {
        nameLength: String(name).length,
        email: String(email).substring(0, 80),
        hasSubject: !!subject,
        messageLength: String(message).length,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
