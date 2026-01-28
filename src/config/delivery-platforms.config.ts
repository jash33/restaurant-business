/**
 * Delivery Platform Configuration
 *
 * Configuration for food delivery platform links including:
 * - Platform metadata (name, URL, colors)
 * - Brand-compliant styling
 * - Order tracking URLs
 * - Affiliate/partnership link support
 *
 * @example
 * ```ts
 * import { DELIVERY_PLATFORMS, DELIVERY_CONFIG } from '../config/delivery-platforms.config';
 * ```
 */

export interface DeliveryPlatform {
  /** Platform identifier */
  id: string;
  /** Display name */
  name: string;
  /** Restaurant's page/ordering URL on the platform */
  url: string;
  /** Order tracking URL (optional - some platforms have separate tracking) */
  trackingUrl?: string;
  /** Short description for the card */
  description: string;
  /** Brand primary color (hex) */
  primaryColor: string;
  /** Brand secondary color for gradients/accents (hex) */
  secondaryColor?: string;
  /** Whether this is an affiliate/partnership link */
  isAffiliate?: boolean;
  /** Affiliate/partner ID for tracking */
  affiliateId?: string;
}

/**
 * Default delivery platform configurations
 * Update URLs with your restaurant's actual platform pages
 */
export const DELIVERY_PLATFORMS: DeliveryPlatform[] = [
  {
    id: 'doordash',
    name: 'DoorDash',
    url: 'https://www.doordash.com/store/your-restaurant',
    trackingUrl: 'https://www.doordash.com/orders',
    description: 'Order for delivery',
    primaryColor: '#FF3008',
    secondaryColor: '#EB1700',
    isAffiliate: false,
  },
  {
    id: 'ubereats',
    name: 'Uber Eats',
    url: 'https://www.ubereats.com/store/your-restaurant',
    trackingUrl: 'https://www.ubereats.com/orders',
    description: 'Fast delivery available',
    primaryColor: '#06C167',
    secondaryColor: '#000000',
    isAffiliate: false,
  },
  {
    id: 'toast',
    name: 'Toast',
    url: 'https://www.toasttab.com/your-restaurant',
    description: 'Order direct from us',
    primaryColor: '#FF6900',
    secondaryColor: '#FF4F00',
    isAffiliate: false,
  },
  {
    id: 'grubhub',
    name: 'Grubhub',
    url: 'https://www.grubhub.com/restaurant/your-restaurant',
    trackingUrl: 'https://www.grubhub.com/account/orders',
    description: 'Delivery & pickup',
    primaryColor: '#F63440',
    secondaryColor: '#FF8000',
    isAffiliate: false,
  },
];

/**
 * Global delivery section configuration
 */
export const DELIVERY_CONFIG = {
  /** Section heading */
  heading: 'Order Online',
  /** Section subheading */
  subheading: 'Get your favorite dishes delivered right to your door',
  /** ID for the section (used for anchor links) */
  sectionId: 'order-online',
  /** Show order tracking info section */
  showTrackingInfo: true,
  /** Show estimated delivery times */
  showDeliveryTimes: true,
  /** Average delivery time range (in minutes) */
  deliveryTimeRange: {
    min: 30,
    max: 45,
  },
  /** Minimum order amount (optional) */
  minimumOrder: undefined as number | undefined,
  /** Delivery radius description */
  deliveryRadius: '5-mile radius',
};
