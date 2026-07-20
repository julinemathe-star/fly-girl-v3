export type Testimonial = {
  quote: string;
  name: string;
  /** e.g. "Corporate Client, Dallas" or "Mother of the Graduate" */
  context?: string;
};

/**
 * Client testimonials — add each new review here and it appears on the
 * homepage automatically, styled to match the editorial aesthetic.
 * While this list is empty, the testimonials section stays hidden.
 *
 * Example:
 * {
 *   quote: "Juline transformed our executive dinner into the most talked-about evening of the year.",
 *   name: "A. Smith",
 *   context: "Corporate Client, Frisco",
 * },
 */
export const testimonials: Testimonial[] = [];
