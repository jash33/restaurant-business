/**
 * Contact CTA Section Types
 * Type definitions for the lead capture contact section component.
 */

/**
 * Trust signal displayed in the CTA section
 */
export interface TrustSignal {
  /** Icon SVG content or identifier */
  icon?: string;
  /** The main value/number to display */
  value: string;
  /** Label describing the value */
  label: string;
}

/**
 * CTA button configuration
 */
export interface CTAButton {
  /** Button text */
  text: string;
  /** Link destination */
  href: string;
  /** Button variant */
  variant?: 'primary' | 'secondary';
}

/**
 * Props for the ContactCTA component
 */
export interface ContactCTAProps {
  /** Main headline text - should create urgency or highlight value */
  headline: string;

  /** Supporting text that highlights the dining experience and encourages reservations */
  supportingText: string;

  /** Primary CTA button configuration */
  primaryCTA: CTAButton;

  /** Optional secondary CTA button */
  secondaryCTA?: CTAButton;

  /** Trust signals to display (testimonial count, years in business, etc.) */
  trustSignals?: TrustSignal[];

  /** Section ID for anchor linking */
  id?: string;

  /** Additional CSS classes */
  class?: string;

  /** ARIA label for the section */
  ariaLabel?: string;

  /** Whether to use a contrasting background style */
  contrast?: boolean;
}
