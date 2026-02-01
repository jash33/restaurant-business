/**
 * FAQ Accordion Types
 * Type definitions for the FAQ accordion component.
 */

/**
 * Represents a single FAQ item
 */
export interface FAQItem {
  /** Unique identifier for the FAQ item */
  id: string;
  /** The question text */
  question: string;
  /** The answer content (can include HTML for formatting) */
  answer: string;
  /** Optional category for grouping FAQs */
  category?: FAQCategory;
}

/**
 * FAQ category options for organizing questions
 */
export type FAQCategory =
  | 'dining'
  | 'menu'
  | 'reservations'
  | 'events'
  | 'general';

/**
 * Props for the FAQAccordion component
 */
export interface FAQAccordionProps {
  /** Array of FAQ items to display */
  items: FAQItem[];
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Whether multiple panels can be open at once */
  allowMultiple?: boolean;
  /** Index of initially expanded item (null for all collapsed) */
  initialExpanded?: number | null;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * State for a single accordion item
 */
export interface FAQAccordionItemState {
  /** Whether the item is currently expanded */
  isExpanded: boolean;
  /** Unique ID for ARIA relationships */
  triggerId: string;
  /** Unique ID for the panel content */
  panelId: string;
}

/**
 * Default FAQ items for the restaurant
 * Covering dining experience, menu, reservations, events, and general questions
 */
export const DEFAULT_FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-reservations',
    question: 'Do I need a reservation, or do you accept walk-ins?',
    answer: `We welcome both reservations and walk-ins! However, we highly recommend making a reservation, especially for dinner service on Fridays and Saturdays, as we tend to fill up quickly. You can easily reserve a table through our website, by calling us directly, or through OpenTable. Walk-in guests are always welcome and will be seated on a first-come, first-served basis depending on availability.`,
    category: 'reservations',
  },
  {
    id: 'faq-hours',
    question: 'What are your hours of operation?',
    answer: `We are open <strong>Tuesday through Thursday</strong> from 11:00 AM to 9:00 PM, <strong>Friday and Saturday</strong> from 11:00 AM to 10:00 PM, and <strong>Sunday</strong> from 10:00 AM to 3:00 PM for brunch service. We are closed on Mondays. Our kitchen accepts last orders 30 minutes before closing. Holiday hours may vary, so please check our website or give us a call to confirm.`,
    category: 'general',
  },
  {
    id: 'faq-dietary-accommodations',
    question: 'Can you accommodate dietary restrictions or food allergies?',
    answer: `Absolutely! We take dietary needs and food allergies very seriously. Our menu features clearly marked options for <strong>vegetarian</strong>, <strong>vegan</strong>, and <strong>gluten-free</strong> dishes. Our kitchen staff is trained to handle common allergens, and our chefs are happy to modify many dishes to suit your needs. Please inform your server of any allergies or dietary restrictions when you order, and we'll do our best to ensure a safe and delicious dining experience.`,
    category: 'menu',
  },
  {
    id: 'faq-private-events',
    question: 'Do you host private events or parties?',
    answer: `Yes! We love hosting special occasions. We offer a private dining room that seats up to 40 guests, perfect for birthdays, anniversaries, corporate dinners, rehearsal dinners, and holiday gatherings. We provide customizable prix fixe menus, beverage packages, and dedicated event coordination to make your celebration memorable. Contact us at least two weeks in advance to discuss availability and planning details.`,
    category: 'events',
  },
  {
    id: 'faq-parking',
    question: 'Is there parking available?',
    answer: `We offer a complimentary parking lot directly behind the restaurant with spaces for approximately 30 vehicles. Additional street parking is available on surrounding blocks at no charge after 6:00 PM and all day on weekends. For larger parties or events, we recommend rideshare services. We are also conveniently located near several public transit stops for easy access.`,
    category: 'general',
  },
  {
    id: 'faq-catering',
    question: 'Do you offer catering services?',
    answer: `Yes, we offer full-service catering for events of all sizes, from intimate gatherings of 10 to large celebrations of 200+ guests. Our catering menu features many of our most popular restaurant dishes, along with exclusive catering-only options. We provide <strong>delivery and setup</strong>, <strong>buffet-style service</strong>, <strong>plated dinner service</strong>, and <strong>custom menu creation</strong> tailored to your event. Contact our catering team for a personalized quote and menu consultation.`,
    category: 'events',
  },
  {
    id: 'faq-dress-code',
    question: 'Is there a dress code?',
    answer: `Our dress code is smart casual. We want you to feel comfortable while dining with us, so think of it as a step above everyday wear. Collared shirts, blouses, nice jeans, slacks, and closed-toe shoes are all perfectly appropriate. For our weekend brunch service, we're a bit more relaxed. We kindly ask that guests avoid athletic wear, flip-flops, and overly casual beachwear during dinner service.`,
    category: 'dining',
  },
  {
    id: 'faq-menu-changes',
    question: 'How often does the menu change?',
    answer: `Our menu evolves with the seasons to showcase the freshest locally sourced ingredients available. We update our seasonal specials roughly every 6–8 weeks, while our core menu of signature dishes remains available year-round. Our chef also features weekly specials that highlight unique ingredients and creative preparations. Follow us on social media or sign up for our newsletter to stay updated on new dishes and seasonal offerings.`,
    category: 'menu',
  },
  {
    id: 'faq-kids-menu',
    question: 'Do you have a kids menu?',
    answer: `Yes! We offer a dedicated kids menu for children 12 and under, featuring kid-friendly favorites prepared with the same quality ingredients we use throughout our kitchen. Options include smaller portions of select entrées, house-made chicken tenders, pasta, and a mini burger, all served with a choice of side and a drink. We also have high chairs and booster seats available to make dining with little ones as comfortable as possible.`,
    category: 'menu',
  },
  {
    id: 'faq-gift-cards',
    question: 'Do you sell gift cards?',
    answer: `Yes, we offer gift cards in any denomination starting at $25. They make a perfect gift for food lovers and are available for purchase <strong>in-restaurant</strong> at the host stand or <strong>online</strong> through our website for convenient digital delivery. Gift cards never expire and can be used for dine-in, takeout, catering services, or private event bookings. During the holiday season, we often run special promotions—buy a $100 gift card and receive a bonus $20 card on us!`,
    category: 'general',
  },
];
