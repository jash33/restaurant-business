/**
 * Type Exports
 * Re-exports all types for convenient importing
 */

export type {
  MetaTags,
  OpenGraphTags,
  TwitterTags,
  LanguageConfig,
  ArticleSchema,
  OrganizationSchema,
  ProductSchema,
  BreadcrumbSchema,
  WebPageSchema,
  JsonLdSchema,
  CustomMetaTag,
  SEOProps,
  SEOConfig,
} from './seo';

export type {
  ButtonVariant,
  ButtonSize,
  IconPosition,
  ButtonProps,
  ButtonState,
} from './button';

export type {
  Service,
  ServiceCTA,
  ServiceCardProps,
  ServicesSectionProps,
} from './service';

export type {
  ProjectType,
  BudgetRange,
  ContactFormData,
  ContactFormErrors,
  ContactFormTouched,
  FormStatus,
  ContactFormState,
  ProjectTypeOption,
  BudgetRangeOption,
  ValidationConfig,
} from './contact-form';

export {
  DEFAULT_VALIDATION_CONFIG,
  PROJECT_TYPE_OPTIONS,
  BUDGET_RANGE_OPTIONS,
  INITIAL_FORM_DATA,
  INITIAL_TOUCHED,
} from './contact-form';


export type {
  HeroCTA,
  HeroSectionProps,
} from './hero';

export type {
  TechnologyCategory,
  ProjectCategory,
  ProjectLink,
  TechnologyTag,
  ProjectImage,
  Project,
  ProjectCardProps,
  FilterOption,
  PortfolioSectionProps,
} from './portfolio';

export {
  PROJECT_CATEGORIES,
  TECHNOLOGY_CATEGORIES,
} from './portfolio';

export type {
  TrustSignal,
  CTAButton,
  ContactCTAProps,
} from './contact-cta';

export type {
  FAQItem,
  FAQCategory,
  FAQAccordionProps,
  FAQAccordionItemState,
} from './faq';

export {
  DEFAULT_FAQ_ITEMS,
} from './faq';

export type {
  ConsentCategory,
  ConsentStatus,
  ConsentPreferences,
  ConsentState,
  ConsentBannerConfig,
  GA4Config,
  GA4ConsentMode,
  UserProperties,
  AnalyticsService,
  WebVitals,
  PerformanceEntry,
} from './analytics';

export type {
  MenuType,
  MenuCategory,
  DietaryTag,
  AllergenTag,
  SpiceLevel,
  PreparationStyle,
  MenuTypeOption,
  MenuCategoryOption,
  DietaryTagOption,
  AllergenTagOption,
  MenuItemImage,
  MenuItemPrice,
  MenuItemPriceVariant,
  MenuItemAddOn,
  NutritionalInfo,
  MenuItem,
  MenuSection,
  Menu,
  MenuItemCardProps,
  MenuSectionProps,
  MenuCategorySectionLayout,
  MenuCategorySectionProps,
  MenuProps,
  MenuFilterOptions,
} from './menu';

export {
  MENU_TYPE_OPTIONS,
  MENU_CATEGORY_OPTIONS,
  DIETARY_TAG_OPTIONS,
  ALLERGEN_TAG_OPTIONS,
  SPICE_LEVEL_OPTIONS,
  DEFAULT_CURRENCY,
  createPrice,
  formatPrice,
} from './menu';

export type {
  DayOfWeek,
  OperatingStatus,
  TimeFormat,
  TimeRange,
  DailyHours,
  SpecialHoursType,
  SpecialHours,
  BusinessHoursConfig,
  CurrentStatus,
  HoursDisplayProps,
  HoursDisplayState,
} from './hours';
export type {
  TeamMember,
  SourcingPrinciple,
  IngredientPartnership,
  TimelineMilestone,
  FoundersStory,
  AboutPageConfig,
  TeamBiosProps,
  SourcingPhilosophyProps,
  PartnershipShowcaseProps,
  RestaurantTimelineProps,
} from './about';

export type {
  CuisineThemeId,
  CuisineColorPalette,
  CuisineTheme,
  CuisineThemeConfig,
  CuisineThemeAwareProps,
  CuisineThemeMap,
} from './cuisine-theme';

export type {
  FloatingBadgePosition,
  BadgeVisibility,
  FloatingHoursBadgeProps,
  FloatingBadgeState,
} from './floating-hours-badge';

export type {
  ParkingType,
  TransitType,
  ParkingTip,
  TransitTip,
  BikeParkingInfo,
  AccessibilityFeature,
  FirstTimeVisitorTip,
  RideshareInfo,
  ParkingTransitInfoConfig,
  ParkingTransitInfoSectionProps,
  ParkingTransitInfoDisplayConfig,
} from './parking-transit-info';

