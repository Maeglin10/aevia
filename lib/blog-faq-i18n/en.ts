import type { BlogFaqItem } from "../blog-posts";

/* Traduction (en) de lib/blog-faq-ajouts.ts, article par article, dans le même ordre. */
export const FAQ_EN: Record<string, BlogFaqItem[]> = {
  "choisir-template-site-web": [
    {
      q: "How do I choose a website template that suits my business?",
      a: "Start from your industry and your target audience: the design has to match them. A pretty template that does not speak to your customers costs you credibility. Then check that it is designed mobile-first and that it stays fast.",
    },
    {
      q: "Why does mobile matter so much when choosing a template?",
      a: "Because most of the world's web traffic comes from mobile devices (the source is cited in the article). A template designed for mobile first avoids losing a large share of visitors.",
    },
    {
      q: "How far can a template be customized?",
      a: "Far enough to carry your identity (logo, colors, text, photos) without rebuilding the whole site. If adapting it takes a complete overhaul, it is not the right template.",
    },
    {
      q: "Is speed as important as design?",
      a: "Yes. A beautiful but slow site drives visitors away: performance is one of the selection criteria, on par with aesthetics.",
    },
  ],
  "rgpd-site-web-obligations-2026": [
    {
      q: "Which documents does a website need for GDPR?",
      a: "Three: the legal notice, the privacy policy, and a cookie consent banner if you track visitors.",
    },
    {
      q: "Does a pre-ticked box count as consent?",
      a: "No. Consent must be explicit: a pre-ticked box is not enough.",
    },
    {
      q: "Are CNIL penalties a real risk for a small business?",
      a: "Yes, they are real. The article points to the CNIL's 2024 report, which gives figures for the penalties imposed and the total fines.",
    },
    {
      q: "How long does it take to bring a showcase site into compliance?",
      a: "The article estimates one to two days for a typical showcase site.",
    },
  ],
  "erreurs-site-web-font-fuir-clients": [
    {
      q: "Which website mistakes drive customers away?",
      a: "Five mistakes come up again and again: a page that loads too slowly, an unclear main message, a site poorly adapted to mobile, no visible call to action, and poor-quality photos.",
    },
    {
      q: "How quickly should a visitor understand my offer?",
      a: "The main message should be understood in under 5 seconds, otherwise the visitor leaves.",
    },
    {
      q: "Why is a clear call to action necessary?",
      a: "If visitors do not know what to do, they do nothing. A visible button shows the next step.",
    },
    {
      q: "How can I quickly diagnose my site?",
      a: "The article suggests a 5 minutes diagnosis: go back over the five mistakes above on your own site, especially on a phone.",
    },
  ],
  "whatsapp-business-guide-pme": [
    {
      q: "What is the difference between WhatsApp Business and the WhatsApp Business API?",
      a: "WhatsApp Business is a free mobile app for small businesses. The WhatsApp Business platform (API) is paid but allows advanced automation.",
    },
    {
      q: "Do my customers have to install anything to message me?",
      a: "No. If they already use WhatsApp, they write to you in the same place where they talk to their friends and family.",
    },
    {
      q: "What should I set up first on WhatsApp Business?",
      a: "The business profile, a welcome message, an away message, quick replies and labels. Welcome and away messages keep a customer from being left without an answer.",
    },
    {
      q: "How can I avoid juggling several messaging apps?",
      a: "By bringing WhatsApp together with your other channels in a unified inbox.",
    },
  ],
  "vitesse-site-web-optimisations": [
    {
      q: "Which optimizations speed up a website the most?",
      a: "Five levers: compress and convert images, load elements lazily (lazy loading), reduce third-party scripts, cache effectively, and move to better-performing hosting.",
    },
    {
      q: "Why start with images?",
      a: "Images are often the heaviest part of a page: that is where the gain is biggest.",
    },
    {
      q: "What is a CDN for?",
      a: "It brings your files closer to visitors who are far from your server.",
    },
    {
      q: "Does speed affect search rankings?",
      a: "Yes: since 2021, Google's Core Web Vitals have influenced position in search results. Measure before and after every change.",
    },
  ],
  "repondre-avis-negatifs-reputation": [
    {
      q: "How do I respond to a negative review?",
      a: "In four steps: acknowledge the customer's experience, explain briefly without getting defensive, offer a concrete solution, then invite them to continue in private.",
    },
    {
      q: "Should I reply right away?",
      a: "No. Never reply in the heat of the moment: wait at least 30 minutes before responding to a negative review.",
    },
    {
      q: "Why is responding important?",
      a: "Because your future customers read your reviews, and your response matters as much as the review itself. A bad review handled well is more reassuring than a page where every review has 5 stars, which looks fake.",
    },
    {
      q: "What should I avoid doing?",
      a: "The article details the mistakes never to make, starting with replying under the influence of emotion.",
    },
  ],
  "ia-support-client-pme": [
    {
      q: "What can AI do in a small business's customer support?",
      a: "Answer frequent questions in real time, qualify and sort requests, handle automatic reminders and follow-ups, and stay available 24 hours a day.",
    },
    {
      q: "Does AI replace the human relationship?",
      a: "No. It frees the team from repetitive tasks that add no value. The article also states what AI should not do and must hand over to a person.",
    },
    {
      q: "What share of requests can AI handle?",
      a: "A good share of repetitive requests (opening hours, prices, availability, order status). The exact share depends on what its knowledge base contains.",
    },
    {
      q: "Do I need technical skills to set it up?",
      a: "No, not with modern tools. The article describes the setup with Aevia Inbox and what to measure before and after.",
    },
  ],
  "securite-mots-de-passe-comptes-pros": [
    {
      q: "Why should you never reuse a password?",
      a: "If one service is hacked, every account sharing that password is compromised too.",
    },
    {
      q: "What is a password manager for?",
      a: "To give each account a long, unique password without having to memorize it (for example Bitwarden or 1Password, both mentioned in the article).",
    },
    {
      q: "Is two-factor authentication necessary?",
      a: "Yes: it is the second most important lock. Turn it on everywhere you can.",
    },
    {
      q: "Which accounts does phishing target first?",
      a: "Your business accounts: email, CRM, bank, suppliers.",
    },
  ],
  "tunnel-conversion-landing-page": [
    {
      q: "What is a conversion funnel?",
      a: "The sequence of steps between an unknown visitor and a paying customer.",
    },
    {
      q: "What are the 4 steps of an effective funnel?",
      a: "Capture attention (the promise), build trust (the proof), overcome objections (the friction) and close with a frictionless call to action.",
    },
    {
      q: "What happens without a structured funnel?",
      a: "Visitors leave without a trace.",
    },
    {
      q: "Why measure each step?",
      a: "Without analytics, you are working blind. Measuring each step shows where visitors are lost; A/B testing then lets you test before you decide.",
    },
  ],
  "segmentation-clients-fidelisation": [
    {
      q: "What is customer segmentation?",
      a: "Dividing your customers into homogeneous groups so you can speak to them differently.",
    },
    {
      q: "Which segmentations should I start with?",
      a: "Four basics: RFM segmentation (recency, frequency, monetary value), by preferred channel, by type of need and by satisfaction.",
    },
    {
      q: "Why retain customers rather than acquire them?",
      a: "According to studies and industries, acquiring a customer costs significantly more than keeping one (a Harvard Business Review study cited in the article): loyalty mostly requires knowing your customers well.",
    },
    {
      q: "What tool do I need?",
      a: "A CRM or a unified inbox, to gather each customer's history in one place.",
    },
  ],
  "optimiser-presence-en-ligne": [
    {
      q: "How do I optimize my online presence in 2026?",
      a: "Five levers: a professional website, local SEO, a well-maintained Google listing, a choice of social networks rather than all of them at once, and a site that loads quickly.",
    },
    {
      q: "Why does local SEO matter?",
      a: "It helps you get found by people searching near you.",
    },
    {
      q: "Do I need to be on every social network?",
      a: "No: the article advises choosing the ones where your customers are rather than doing everything.",
    },
    {
      q: "Where should I start?",
      a: "The article ends with a \"Where to start?\" section that puts these five actions in order.",
    },
  ],
  "audit-securite-site-web": [
    {
      q: "Why audit the security of a small website?",
      a: "Because web security is not only a concern for large companies: a vulnerability can appear at any time, on any site.",
    },
    {
      q: "What does a web security audit check?",
      a: "The SSL/HTTPS certificate, the common vulnerabilities in the OWASP Top 10 ranking, the HTTP security headers and the DNS configuration.",
    },
    {
      q: "Do you need to be a developer to audit your site?",
      a: "No: the article explains how to do it without being a developer, using a scanning tool.",
    },
    {
      q: "Is a single audit enough?",
      a: "No. Continuous monitoring is recommended, because a vulnerability can appear after the audit.",
    },
  ],
  "gestion-messages-clients-multicanal": [
    {
      q: "Why centralize customer messages?",
      a: "A scattered inbox lengthens response times, causes messages to be lost or forgotten and damages your professional image.",
    },
    {
      q: "What is a unified inbox?",
      a: "A tool that brings together, in one place, the messages from all your contact channels.",
    },
    {
      q: "How do I organize the transition?",
      a: "In four steps: map your current channels, choose the centralization tool, document your standard replies and communicate your response times.",
    },
    {
      q: "What role does AI play?",
      a: "That of an assistant in managing messages: the article presents it as a help, not as a replacement for the team.",
    },
  ],
};
