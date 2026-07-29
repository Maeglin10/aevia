/**
 * Shared motion vocabulary for the hero proposals.
 *
 * Derived from ~/skylaunch/docs/SLIDER_REVOLUTION_TEARDOWN.md:
 *  - strong inOut curves (power3 / power4) instead of easeOut
 *  - entrances on a strict 0 / 300 / 500 ms beat grid, nothing in between
 *  - layers arrive through a perspective container (from depth, not from below)
 *  - one very slow ambient loop running under the fast entrances
 */

/** GSAP power3.inOut as a cubic-bezier. */
export const POWER3_IN_OUT = [0.65, 0, 0.35, 1] as const;
/** GSAP power4.inOut as a cubic-bezier. */
export const POWER4_IN_OUT = [0.76, 0, 0.24, 1] as const;

/** The only three entrance delays allowed. Three beats, nothing else. */
export const BEAT = { one: 0, two: 0.3, three: 0.5 } as const;

/** Perspective container: layers arrive from depth rather than sliding up. */
export const STAGE = {
  perspective: 1400,
  transformStyle: 'preserve-3d' as const,
};

/**
 * A layer arriving through the perspective container.
 * `beat` picks one of the three allowed delays.
 */
export function layer(beat: number, reduced: boolean) {
  if (reduced) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.01, delay: 0 },
    };
  }
  return {
    initial: { opacity: 0, z: -180, rotateX: 7, y: 18 },
    animate: { opacity: 1, z: 0, rotateX: 0, y: 0 },
    transition: { duration: 0.72, delay: beat, ease: POWER4_IN_OUT },
  };
}

/** Secondary layers (rows inside a panel) — shallower, same beat grid. */
export function subLayer(beat: number, reduced: boolean) {
  if (reduced) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.01, delay: 0 },
    };
  }
  return {
    initial: { opacity: 0, z: -70, y: 10 },
    animate: { opacity: 1, z: 0, y: 0 },
    transition: { duration: 0.6, delay: beat, ease: POWER3_IN_OUT },
  };
}

/** The single slow ambient loop that runs under everything else. */
export function ambient(reduced: boolean) {
  if (reduced) return {};
  return {
    animate: { opacity: [0.72, 1, 0.72], scale: [1, 1.06, 1] },
    transition: { duration: 15, repeat: Infinity, ease: 'easeInOut' as const },
  };
}
