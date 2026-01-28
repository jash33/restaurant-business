I'll continue the implementation of the Google Business Integration feature. Let me first explore the codebase to understand the current structure and see what may have already been implemented.

🔧 Tool: Glob
Input: {
  "pattern": "**/*.{ts,tsx,js,jsx}"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/google*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*business*"
}
Let me search for the main source files more specifically:

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.{ts,tsx,astro}"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\"",
  "description": "List root directory contents"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore existing codebase structure and patterns",
      "status": "in_progress",
      "activeForm": "Exploring existing codebase structure and patterns"
    },
    {
      "content": "Check if any Google Business components already exist",
      "status": "pending",
      "activeForm": "Checking if any Google Business components already exist"
    },
    {
      "content": "Create GoogleBusinessProfile component with reviews, photos, Q&A",
      "status": "pending",
      "activeForm": "Creating GoogleBusinessProfile component"
    },
    {
      "content": "Add review schema markup for SEO",
      "status": "pending",
      "activeForm": "Adding review schema markup for SEO"
    },
    {
      "content": "Add review CTA components",
      "status": "pending",
      "activeForm": "Adding review CTA components"
    },
    {
      "content": "Integrate into relevant pages",
      "status": "pending",
      "activeForm": "Integrating into relevant pages"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying implementation with Playwright test"
    }
  ]
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\utils\\local-business-jsonld.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\utils\\restaurant-jsonld.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\restaurant.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro"
}
Now let me check for any existing review-related components and the Layout/SEO components:

🔧 Tool: Grep
Input: {
  "pattern": "review|Review|google.*business|GoogleBusiness",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\SEO.astro"
}
Now let me look at the types for schema and an existing component to understand the styling patterns:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore existing codebase structure and patterns",
      "status": "completed",
      "activeForm": "Exploring existing codebase structure and patterns"
    },
    {
      "content": "Check if any Google Business components already exist",
      "status": "completed",
      "activeForm": "Checking if any Google Business components already exist"
    },
    {
      "content": "Create GoogleBusinessProfile component with reviews, photos, Q&A",
      "status": "in_progress",
      "activeForm": "Creating GoogleBusinessProfile component"
    },
    {
      "content": "Add review schema markup for SEO",
      "status": "pending",
      "activeForm": "Adding review schema markup for SEO"
    },
    {
      "content": "Add review CTA components",
      "status": "pending",
      "activeForm": "Adding review CTA components"
    },
    {
      "content": "Integrate into relevant pages",
      "status": "pending",
      "activeForm": "Integrating into relevant pages"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying implementation with Playwright test"
    }
  ]
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\seo.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ContactCTA.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\globals.css"
}
Now I have a good understanding of the codebase patterns. Let me create the Google Business Profile integration feature. I'll create:

1. A config file for Google Business settings
2. A type definition file
3. A GoogleBusinessProfile component with reviews display, photos, Q&A link, and review CTA
4. Review schema markup for SEO

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\google-business.ts",
  "content": "/**\n * Google Business Profile TypeScript Types\n * Type definitions for Google Business integration components\n */\n\n/**\n * Individual review from Google Business Profile\n */\nexport interface GoogleReview {\n  /** Reviewer's display name */\n  authorName: string;\n  /** URL to reviewer's profile picture (optional) */\n  authorPhotoUrl?: string;\n  /** Rating value (1-5 stars) */\n  rating: number;\n  /** Review text content */\n  text: string;\n  /** Relative time description (e.g., \"2 weeks ago\") */\n  relativeTimeDescription: string;\n  /** ISO date string of when the review was posted */\n  time?: string;\n}\n\n/**\n * Photo from Google Business Profile\n */\nexport interface GoogleBusinessPhoto {\n  /** URL to the photo */\n  url: string;\n  /** Alt text for accessibility */\n  alt: string;\n  /** Photo attribution (photographer name) */\n  attribution?: string;\n  /** Photo category (food, interior, exterior, etc.) */\n  category?: 'food' | 'interior' | 'exterior' | 'ambiance' | 'team' | 'other';\n}\n\n/**\n * FAQ/Q&A item from Google Business Profile\n */\nexport interface GoogleBusinessQA {\n  /** The question asked */\n  question: string;\n  /** The answer provided */\n  answer: string;\n  /** Date the Q&A was posted */\n  datePosted?: string;\n}\n\n/**\n * Google Business Profile Configuration\n */\nexport interface GoogleBusinessConfig {\n  /** Google Business Profile Place ID */\n  placeId: string;\n  /** Direct URL to the Google Business Profile */\n  profileUrl: string;\n  /** URL to leave a review */\n  reviewUrl: string;\n  /** URL to the Q&A section */\n  qnaUrl?: string;\n  /** URL to view photos on Google */\n  photosUrl?: string;\n  /** Overall rating (1-5) */\n  rating: number;\n  /** Total number of reviews */\n  totalReviews: number;\n  /** Featured reviews to display */\n  featuredReviews: GoogleReview[];\n  /** Featured photos from the profile */\n  photos?: GoogleBusinessPhoto[];\n  /** Featured Q&A items */\n  featuredQA?: GoogleBusinessQA[];\n  /** Business name as shown on Google */\n  businessName: string;\n  /** Last updated date for the data */\n  lastUpdated?: string;\n}\n\n/**\n * Props for the GoogleBusinessProfile component\n */\nexport interface GoogleBusinessProfileProps {\n  /** Section ID for anchor links */\n  id?: string;\n  /** Section heading text */\n  heading?: string;\n  /** Section subheading/description */\n  subheading?: string;\n  /** Additional CSS classes */\n  class?: string;\n  /** Whether to show the photos section */\n  showPhotos?: boolean;\n  /** Whether to show the Q&A section */\n  showQA?: boolean;\n  /** Whether to show the review CTA */\n  showReviewCTA?: boolean;\n  /** Maximum number of reviews to display */\n  maxReviews?: number;\n  /** Maximum number of photos to display */\n  maxPhotos?: number;\n  /** Layout variant */\n  variant?: 'default' | 'compact' | 'featured';\n}\n\n/**\n * Props for the ReviewCTA component\n */\nexport interface ReviewCTAProps {\n  /** CTA heading text */\n  heading?: string;\n  /** CTA description text */\n  description?: string;\n  /** Button text */\n  buttonText?: string;\n  /** URL to leave a review */\n  reviewUrl: string;\n  /** Visual variant */\n  variant?: 'default' | 'inline' | 'card';\n  /** Additional CSS classes */\n  class?: string;\n}\n\n/**\n * Review schema for JSON-LD structured data\n */\nexport interface ReviewSchema {\n  '@type': 'Review';\n  author: {\n    '@type': 'Person';\n    name: string;\n  };\n  reviewRating: {\n    '@type': 'Rating';\n    ratingValue: number;\n    bestRating: number;\n    worstRating: number;\n  };\n  reviewBody?: string;\n  datePublished?: string;\n}\n"
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\google-business.config.ts",
  "content": "/**\n * Google Business Profile Configuration\n * Configuration for Google Business Profile integration including\n * profile links, featured reviews, photos, and Q&A.\n *\n * To update this data:\n * 1. Visit your Google Business Profile dashboard\n * 2. Copy your Place ID from the URL or use the Place ID Finder\n * 3. Update the rating and review count from your dashboard\n * 4. Manually curate featured reviews for display\n */\n\nimport type { GoogleBusinessConfig } from '../types/google-business';\n\n/**\n * Google Business Profile Settings\n * Update these values with your actual Google Business Profile data\n */\nexport const googleBusinessConfig: GoogleBusinessConfig = {\n  // === Profile Identification ===\n  // Find your Place ID: https://developers.google.com/maps/documentation/javascript/place-id\n  placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4', // Replace with your actual Place ID\n\n  // === Profile URLs ===\n  // Main Google Business Profile URL\n  profileUrl: 'https://www.google.com/maps/place/Main+Street+Bistro',\n\n  // Direct link to leave a review\n  // Format: https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID\n  reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',\n\n  // Q&A section URL (usually the main profile URL)\n  qnaUrl: 'https://www.google.com/maps/place/Main+Street+Bistro#questions',\n\n  // Photos section URL\n  photosUrl: 'https://www.google.com/maps/place/Main+Street+Bistro#photos',\n\n  // === Business Information ===\n  businessName: 'The Main Street Bistro',\n\n  // === Ratings & Reviews Summary ===\n  // Update these values periodically from your Google Business dashboard\n  rating: 4.7,\n  totalReviews: 312,\n\n  // === Featured Reviews ===\n  // Curate 3-5 of your best reviews for display\n  // Update these periodically to keep content fresh\n  featuredReviews: [\n    {\n      authorName: 'Sarah M.',\n      rating: 5,\n      text: \"Absolutely incredible dining experience! The ribeye steak was cooked to perfection and the craft cocktails were outstanding. The atmosphere is elegant yet comfortable - perfect for a special occasion. Our server was attentive without being intrusive. We'll definitely be back!\",\n      relativeTimeDescription: '2 weeks ago',\n      time: '2024-01-10T19:30:00Z',\n    },\n    {\n      authorName: 'Michael R.',\n      rating: 5,\n      text: \"Best restaurant in Houston, hands down. The farm-to-table approach really shows in the quality of every dish. Had the chef's tasting menu and every course was a revelation. The sommelier's wine pairings were spot-on. This place is a gem.\",\n      relativeTimeDescription: '1 month ago',\n      time: '2023-12-28T20:00:00Z',\n    },\n    {\n      authorName: 'Jennifer L.',\n      rating: 5,\n      text: 'We celebrated our anniversary here and it was magical. The private dining room was beautifully set up, and the staff went above and beyond to make us feel special. The seafood tower was fresh and generous. Highly recommend for any special celebration!',\n      relativeTimeDescription: '3 weeks ago',\n      time: '2024-01-05T18:45:00Z',\n    },\n    {\n      authorName: 'David K.',\n      rating: 4,\n      text: 'Great food and ambiance. The brunch menu is exceptional - try the eggs benedict with house-cured salmon. Only minor note: reservations can be tricky on weekends, so book ahead! Worth the planning though.',\n      relativeTimeDescription: '1 month ago',\n      time: '2023-12-20T11:30:00Z',\n    },\n  ],\n\n  // === Featured Photos ===\n  // Add photos that represent your restaurant well\n  photos: [\n    {\n      url: '/images/google-business/restaurant-exterior.jpg',\n      alt: 'The Main Street Bistro exterior with warm evening lighting',\n      category: 'exterior',\n    },\n    {\n      url: '/images/google-business/dining-room.jpg',\n      alt: 'Elegant dining room with ambient lighting',\n      category: 'interior',\n    },\n    {\n      url: '/images/google-business/signature-steak.jpg',\n      alt: 'Our signature ribeye steak with seasonal vegetables',\n      category: 'food',\n    },\n    {\n      url: '/images/google-business/craft-cocktails.jpg',\n      alt: 'Handcrafted cocktails at the bar',\n      category: 'food',\n    },\n  ],\n\n  // === Featured Q&A ===\n  // Common questions and answers from your Google Business Profile\n  featuredQA: [\n    {\n      question: 'Do you take reservations?',\n      answer: 'Yes! We highly recommend reservations, especially for weekend dining. You can book online through our website or call us directly at (713) 555-0123.',\n      datePosted: '2023-11-15',\n    },\n    {\n      question: 'Is there parking available?',\n      answer: 'Yes, we offer complimentary valet parking for all dinner guests. Street parking is also available, and there is a public parking garage one block away.',\n      datePosted: '2023-10-20',\n    },\n    {\n      question: 'Do you accommodate dietary restrictions?',\n      answer: 'Absolutely! Our chef is happy to accommodate vegetarian, vegan, gluten-free, and most allergy requirements. Please let us know when making your reservation.',\n      datePosted: '2023-12-01',\n    },\n  ],\n\n  // === Last Updated ===\n  // Track when this data was last refreshed\n  lastUpdated: '2024-01-26',\n};\n\n/**\n * Export individual config items for convenience\n */\nexport const {\n  placeId,\n  profileUrl,\n  reviewUrl,\n  qnaUrl,\n  photosUrl,\n  businessName,\n  rating,\n  totalReviews,\n  featuredReviews,\n  photos,\n  featuredQA,\n} = googleBusinessConfig;\n\n/**\n * Generate the review schema for JSON-LD structured data\n */\nexport function generateReviewSchemaItems() {\n  return featuredReviews.map((review) => ({\n    '@type': 'Review' as const,\n    author: {\n      '@type': 'Person' as const,\n      name: review.authorName,\n    },\n    reviewRating: {\n      '@type': 'Rating' as const,\n      ratingValue: review.rating,\n      bestRating: 5,\n      worstRating: 1,\n    },\n    reviewBody: review.text,\n    datePublished: review.time,\n  }));\n}\n"
}
Now let me create the main GoogleBusinessProfile component:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\GoogleBusinessProfile.astro",
  "content": "---\n/**\n * Google Business Profile Component\n * Displays Google Business Profile information including reviews, photos,\n * Q&A, and a CTA to leave reviews. Includes review schema markup for SEO.\n *\n * Features:\n * - Star rating display with aggregate rating\n * - Featured customer reviews with author info\n * - Photo gallery from Google Business\n * - Q&A section for common questions\n * - Review CTA with gentle, encouraging messaging\n * - Full JSON-LD review schema markup\n * - WCAG 2.1 AA compliant\n * - Mobile-first responsive design\n *\n * @example Basic usage\n * ```astro\n * <GoogleBusinessProfile />\n * ```\n *\n * @example With custom options\n * ```astro\n * <GoogleBusinessProfile\n *   heading=\"What Our Guests Say\"\n *   maxReviews={3}\n *   showPhotos={true}\n *   showReviewCTA={true}\n * />\n * ```\n */\n\nimport type { GoogleBusinessProfileProps } from '../types/google-business';\nimport {\n  googleBusinessConfig,\n  generateReviewSchemaItems,\n} from '../config/google-business.config';\nimport ReviewCTA from './ReviewCTA.astro';\n\ninterface Props extends GoogleBusinessProfileProps {}\n\nconst {\n  id = 'google-reviews',\n  heading = 'What Our Guests Are Saying',\n  subheading = `See why ${googleBusinessConfig.totalReviews}+ guests have rated us ${googleBusinessConfig.rating} stars on Google`,\n  class: className = '',\n  showPhotos = false,\n  showQA = false,\n  showReviewCTA = true,\n  maxReviews = 4,\n  maxPhotos = 4,\n  variant = 'default',\n} = Astro.props;\n\n// Get data from config\nconst {\n  rating,\n  totalReviews,\n  featuredReviews,\n  photos,\n  featuredQA,\n  profileUrl,\n  reviewUrl,\n  businessName,\n} = googleBusinessConfig;\n\n// Limit reviews and photos to display\nconst displayReviews = featuredReviews.slice(0, maxReviews);\nconst displayPhotos = photos?.slice(0, maxPhotos) || [];\nconst displayQA = featuredQA || [];\n\n// Calculate full and partial stars\nconst fullStars = Math.floor(rating);\nconst hasHalfStar = rating % 1 >= 0.5;\nconst emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);\n\n// Generate review schema for JSON-LD\nconst reviewSchemaItems = generateReviewSchemaItems();\n\n// Build CSS classes\nconst sectionClasses = [\n  'google-business',\n  `google-business--${variant}`,\n  className,\n].filter(Boolean).join(' ');\n\n// Star SVG icons\nconst starFull = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>`;\nconst starHalf = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\" fill-opacity=\"0.3\"/><path d=\"M12 17.27V2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z\"/></svg>`;\nconst starEmpty = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\" fill-opacity=\"0.3\"/></svg>`;\n\n// Google logo SVG\nconst googleLogo = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"#4285F4\" d=\"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z\"/><path fill=\"#34A853\" d=\"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z\"/><path fill=\"#FBBC05\" d=\"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z\"/><path fill=\"#EA4335\" d=\"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z\"/></svg>`;\n---\n\n<section\n  class={sectionClasses}\n  id={id}\n  aria-labelledby={`${id}-heading`}\n  data-section=\"google-business\"\n>\n  <div class=\"google-business__container\">\n    <!-- Section Header -->\n    <header class=\"google-business__header section-heading--decorated\">\n      <h2 id={`${id}-heading`} class=\"google-business__heading\">\n        {heading}\n      </h2>\n      <p class=\"google-business__subheading\">\n        {subheading}\n      </p>\n    </header>\n\n    <!-- Rating Summary -->\n    <div class=\"google-business__summary\">\n      <div class=\"google-business__rating-card\">\n        <div class=\"google-business__google-badge\">\n          <span class=\"google-business__google-logo\" set:html={googleLogo} />\n          <span class=\"google-business__google-text\">Google Reviews</span>\n        </div>\n\n        <div class=\"google-business__rating-display\">\n          <span class=\"google-business__rating-value\">{rating.toFixed(1)}</span>\n          <div class=\"google-business__stars\" role=\"img\" aria-label={`${rating} out of 5 stars`}>\n            {Array(fullStars).fill(null).map(() => (\n              <span class=\"google-business__star google-business__star--full\" set:html={starFull} />\n            ))}\n            {hasHalfStar && (\n              <span class=\"google-business__star google-business__star--half\" set:html={starHalf} />\n            )}\n            {Array(emptyStars).fill(null).map(() => (\n              <span class=\"google-business__star google-business__star--empty\" set:html={starEmpty} />\n            ))}\n          </div>\n        </div>\n\n        <p class=\"google-business__review-count\">\n          Based on <strong>{totalReviews.toLocaleString()}</strong> reviews\n        </p>\n\n        <a\n          href={profileUrl}\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n          class=\"google-business__profile-link\"\n          aria-label={`View ${businessName} on Google Maps (opens in new tab)`}\n        >\n          View on Google\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\n            <path d=\"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"/>\n          </svg>\n        </a>\n      </div>\n    </div>\n\n    <!-- Featured Reviews Grid -->\n    <div class=\"google-business__reviews\" role=\"list\" aria-label=\"Customer reviews\">\n      {displayReviews.map((review, index) => (\n        <article\n          class=\"google-business__review reveal reveal--up\"\n          style={`--reveal-delay: ${index * 100}ms`}\n          role=\"listitem\"\n        >\n          <header class=\"google-business__review-header\">\n            <div class=\"google-business__reviewer\">\n              <div class=\"google-business__reviewer-avatar\" aria-hidden=\"true\">\n                {review.authorName.charAt(0).toUpperCase()}\n              </div>\n              <div class=\"google-business__reviewer-info\">\n                <span class=\"google-business__reviewer-name\">{review.authorName}</span>\n                <span class=\"google-business__review-date\">{review.relativeTimeDescription}</span>\n              </div>\n            </div>\n            <div class=\"google-business__review-rating\" role=\"img\" aria-label={`${review.rating} out of 5 stars`}>\n              {Array(review.rating).fill(null).map(() => (\n                <span class=\"google-business__star google-business__star--small\" set:html={starFull} />\n              ))}\n            </div>\n          </header>\n          <blockquote class=\"google-business__review-text\">\n            <p>\"{review.text}\"</p>\n          </blockquote>\n        </article>\n      ))}\n    </div>\n\n    <!-- Photos Section (Optional) -->\n    {showPhotos && displayPhotos.length > 0 && (\n      <div class=\"google-business__photos\">\n        <h3 class=\"google-business__photos-heading\">Photos from Our Guests</h3>\n        <div class=\"google-business__photos-grid\" role=\"list\">\n          {displayPhotos.map((photo) => (\n            <div class=\"google-business__photo-item\" role=\"listitem\">\n              <img\n                src={photo.url}\n                alt={photo.alt}\n                loading=\"lazy\"\n                class=\"google-business__photo\"\n              />\n              {photo.attribution && (\n                <span class=\"google-business__photo-attribution\">\n                  Photo by {photo.attribution}\n                </span>\n              )}\n            </div>\n          ))}\n        </div>\n      </div>\n    )}\n\n    <!-- Q&A Section (Optional) -->\n    {showQA && displayQA.length > 0 && (\n      <div class=\"google-business__qa\">\n        <h3 class=\"google-business__qa-heading\">Common Questions</h3>\n        <div class=\"google-business__qa-list\">\n          {displayQA.map((qa) => (\n            <div class=\"google-business__qa-item\">\n              <h4 class=\"google-business__question\">\n                <span class=\"google-business__qa-icon\" aria-hidden=\"true\">Q</span>\n                {qa.question}\n              </h4>\n              <p class=\"google-business__answer\">\n                <span class=\"google-business__qa-icon google-business__qa-icon--answer\" aria-hidden=\"true\">A</span>\n                {qa.answer}\n              </p>\n            </div>\n          ))}\n        </div>\n      </div>\n    )}\n\n    <!-- Review CTA -->\n    {showReviewCTA && (\n      <ReviewCTA\n        heading=\"Enjoyed Your Visit?\"\n        description=\"We'd love to hear about your experience! Your review helps other food lovers discover us and helps us continue improving.\"\n        buttonText=\"Leave a Review on Google\"\n        reviewUrl={reviewUrl}\n        variant=\"card\"\n      />\n    )}\n  </div>\n</section>\n\n<!-- JSON-LD Review Schema for SEO -->\n<script type=\"application/ld+json\" set:html={JSON.stringify({\n  '@context': 'https://schema.org',\n  '@type': 'Restaurant',\n  name: businessName,\n  aggregateRating: {\n    '@type': 'AggregateRating',\n    ratingValue: rating,\n    bestRating: 5,\n    worstRating: 1,\n    ratingCount: totalReviews,\n    reviewCount: totalReviews,\n  },\n  review: reviewSchemaItems,\n})} />\n\n<style>\n  /* =================================================================\n   * GOOGLE BUSINESS PROFILE COMPONENT STYLES\n   * =================================================================\n   * Mobile-first responsive design with BEM naming convention\n   */\n\n  .google-business {\n    padding: var(--spacing-16) var(--spacing-4);\n    background-color: var(--color-background);\n  }\n\n  .google-business__container {\n    max-width: var(--container-6xl);\n    margin: 0 auto;\n  }\n\n  /* =================================================================\n   * HEADER STYLES\n   * =================================================================\n   */\n\n  .google-business__header {\n    text-align: center;\n    margin-bottom: var(--spacing-10);\n  }\n\n  .google-business__heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-3xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-3) 0;\n  }\n\n  .google-business__subheading {\n    font-family: var(--font-body);\n    font-size: var(--font-size-md);\n    color: var(--color-text-secondary);\n    margin: 0;\n    max-width: 50ch;\n    margin-inline: auto;\n  }\n\n  /* =================================================================\n   * RATING SUMMARY CARD\n   * =================================================================\n   */\n\n  .google-business__summary {\n    display: flex;\n    justify-content: center;\n    margin-bottom: var(--spacing-10);\n  }\n\n  .google-business__rating-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: var(--spacing-6);\n    background: var(--color-background-subtle);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-2xl);\n    box-shadow: var(--shadow-md);\n    text-align: center;\n    max-width: 320px;\n    width: 100%;\n  }\n\n  .google-business__google-badge {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    margin-bottom: var(--spacing-4);\n    padding: var(--spacing-2) var(--spacing-4);\n    background: var(--color-background);\n    border-radius: var(--radius-full);\n    border: 1px solid var(--color-border);\n  }\n\n  .google-business__google-logo {\n    display: flex;\n    width: 20px;\n    height: 20px;\n  }\n\n  .google-business__google-logo :global(svg) {\n    width: 100%;\n    height: 100%;\n  }\n\n  .google-business__google-text {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-text-secondary);\n  }\n\n  .google-business__rating-display {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--spacing-2);\n    margin-bottom: var(--spacing-3);\n  }\n\n  .google-business__rating-value {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-5xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    line-height: 1;\n  }\n\n  .google-business__stars {\n    display: flex;\n    gap: var(--spacing-1);\n  }\n\n  .google-business__star {\n    display: flex;\n    width: 24px;\n    height: 24px;\n    color: #FBBC05; /* Google yellow */\n  }\n\n  .google-business__star :global(svg) {\n    width: 100%;\n    height: 100%;\n  }\n\n  .google-business__star--small {\n    width: 16px;\n    height: 16px;\n  }\n\n  .google-business__review-count {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    margin: 0 0 var(--spacing-4) 0;\n  }\n\n  .google-business__profile-link {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-1);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-primary);\n    text-decoration: none;\n    transition: color var(--duration-150) var(--ease-in-out);\n  }\n\n  .google-business__profile-link:hover {\n    color: var(--color-primary-600);\n    text-decoration: underline;\n  }\n\n  .google-business__profile-link svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  /* =================================================================\n   * REVIEWS GRID\n   * =================================================================\n   */\n\n  .google-business__reviews {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-6);\n    margin-bottom: var(--spacing-10);\n  }\n\n  .google-business__review {\n    padding: var(--spacing-6);\n    background: var(--color-background);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-xl);\n    box-shadow: var(--shadow-sm);\n    transition:\n      transform var(--duration-300) var(--ease-out),\n      box-shadow var(--duration-300) var(--ease-out);\n    transition-delay: var(--reveal-delay, 0ms);\n  }\n\n  .google-business__review:hover {\n    transform: translateY(-2px);\n    box-shadow: var(--shadow-md);\n  }\n\n  .google-business__review-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-bottom: var(--spacing-4);\n    gap: var(--spacing-3);\n  }\n\n  .google-business__reviewer {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-3);\n  }\n\n  .google-business__reviewer-avatar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);\n    color: var(--color-text-inverse);\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-bold);\n    border-radius: var(--radius-full);\n    flex-shrink: 0;\n  }\n\n  .google-business__reviewer-info {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-0-5);\n  }\n\n  .google-business__reviewer-name {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n  }\n\n  .google-business__review-date {\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    color: var(--color-text-tertiary);\n  }\n\n  .google-business__review-rating {\n    display: flex;\n    gap: 2px;\n    flex-shrink: 0;\n  }\n\n  .google-business__review-text {\n    margin: 0;\n    border: none;\n    padding: 0;\n  }\n\n  .google-business__review-text p {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    line-height: var(--line-height-relaxed);\n    color: var(--color-text-secondary);\n    font-style: italic;\n    margin: 0;\n  }\n\n  /* =================================================================\n   * PHOTOS SECTION\n   * =================================================================\n   */\n\n  .google-business__photos {\n    margin-bottom: var(--spacing-10);\n  }\n\n  .google-business__photos-heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    text-align: center;\n    margin: 0 0 var(--spacing-6) 0;\n  }\n\n  .google-business__photos-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: var(--spacing-4);\n  }\n\n  .google-business__photo-item {\n    position: relative;\n    aspect-ratio: 4/3;\n    overflow: hidden;\n    border-radius: var(--radius-lg);\n  }\n\n  .google-business__photo {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform var(--duration-300) var(--ease-out);\n  }\n\n  .google-business__photo-item:hover .google-business__photo {\n    transform: scale(1.05);\n  }\n\n  .google-business__photo-attribution {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: var(--spacing-2);\n    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));\n    font-size: var(--font-size-xs);\n    color: white;\n    text-align: center;\n  }\n\n  /* =================================================================\n   * Q&A SECTION\n   * =================================================================\n   */\n\n  .google-business__qa {\n    margin-bottom: var(--spacing-10);\n  }\n\n  .google-business__qa-heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    text-align: center;\n    margin: 0 0 var(--spacing-6) 0;\n  }\n\n  .google-business__qa-list {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-6);\n    max-width: 800px;\n    margin: 0 auto;\n  }\n\n  .google-business__qa-item {\n    padding: var(--spacing-5);\n    background: var(--color-background-subtle);\n    border-radius: var(--radius-lg);\n    border: 1px solid var(--color-border);\n  }\n\n  .google-business__question {\n    display: flex;\n    align-items: flex-start;\n    gap: var(--spacing-3);\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-3) 0;\n  }\n\n  .google-business__answer {\n    display: flex;\n    align-items: flex-start;\n    gap: var(--spacing-3);\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    margin: 0;\n    padding-left: var(--spacing-8);\n  }\n\n  .google-business__qa-icon {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 24px;\n    height: 24px;\n    background: var(--color-primary);\n    color: var(--color-text-inverse);\n    font-family: var(--font-heading);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-bold);\n    border-radius: var(--radius-base);\n    flex-shrink: 0;\n  }\n\n  .google-business__qa-icon--answer {\n    background: var(--color-accent);\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES - Tablet (640px+)\n   * =================================================================\n   */\n\n  @media screen and (min-width: 640px) {\n    .google-business {\n      padding: var(--spacing-20) var(--spacing-6);\n    }\n\n    .google-business__heading {\n      font-size: var(--font-size-4xl);\n    }\n\n    .google-business__reviews {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .google-business__photos-grid {\n      grid-template-columns: repeat(4, 1fr);\n    }\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES - Desktop (1024px+)\n   * =================================================================\n   */\n\n  @media screen and (min-width: 1024px) {\n    .google-business {\n      padding: var(--spacing-24) var(--spacing-8);\n    }\n\n    .google-business__header {\n      margin-bottom: var(--spacing-12);\n    }\n\n    .google-business__heading {\n      font-size: var(--font-size-5xl);\n    }\n\n    .google-business__subheading {\n      font-size: var(--font-size-lg);\n    }\n\n    .google-business__summary {\n      margin-bottom: var(--spacing-12);\n    }\n\n    .google-business__rating-card {\n      padding: var(--spacing-8);\n      max-width: 380px;\n    }\n\n    .google-business__star {\n      width: 28px;\n      height: 28px;\n    }\n\n    .google-business__reviews {\n      grid-template-columns: repeat(2, 1fr);\n      gap: var(--spacing-8);\n      margin-bottom: var(--spacing-12);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * =================================================================\n   */\n\n  @media (prefers-reduced-motion: reduce) {\n    .google-business__review {\n      transition: none;\n    }\n\n    .google-business__review:hover {\n      transform: none;\n    }\n\n    .google-business__photo {\n      transition: none;\n    }\n\n    .google-business__photo-item:hover .google-business__photo {\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE ADJUSTMENTS\n   * =================================================================\n   */\n\n  :global(html[data-theme=\"dark\"]) .google-business__rating-card {\n    background: var(--color-background-elevated);\n  }\n\n  :global(html[data-theme=\"dark\"]) .google-business__review {\n    background: var(--color-background-elevated);\n  }\n\n  :global(html[data-theme=\"dark\"]) .google-business__qa-item {\n    background: var(--color-background-elevated);\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * =================================================================\n   */\n\n  @media print {\n    .google-business {\n      padding: var(--spacing-8) 0;\n      background: transparent;\n    }\n\n    .google-business__rating-card {\n      box-shadow: none;\n      border: 1px solid var(--color-border);\n    }\n\n    .google-business__review {\n      box-shadow: none;\n      page-break-inside: avoid;\n    }\n\n    .google-business__photos {\n      display: none;\n    }\n  }\n</style>\n"
}
Now let me create the ReviewCTA component that's used by GoogleBusinessProfile:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore existing codebase structure and patterns",
      "status": "completed",
      "activeForm": "Exploring existing codebase structure and patterns"
    },
    {
      "content": "Check if any Google Business components already exist",
      "status": "completed",
      "activeForm": "Checking if any Google Business components already exist"
    },
    {
      "content": "Create GoogleBusinessProfile component with reviews, photos, Q&A",
      "status": "completed",
      "activeForm": "Creating GoogleBusinessProfile component"
    },
    {
      "content": "Add review schema markup for SEO",
      "status": "completed",
      "activeForm": "Adding review schema markup for SEO"
    },
    {
      "content": "Add review CTA components",
      "status": "in_progress",
      "activeForm": "Adding review CTA components"
    },
    {
      "content": "Integrate into relevant pages",
      "status": "pending",
      "activeForm": "Integrating into relevant pages"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying implementation with Playwright test"
    }
  ]
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ReviewCTA.astro",
  "content": "---\n/**\n * Review CTA Component\n * A gentle call-to-action encouraging customers to leave reviews on Google.\n * Features encouraging messaging without being pushy.\n *\n * Features:\n * - Multiple visual variants (default, inline, card)\n * - Accessible button design\n * - Tracking-ready with data attributes\n * - Mobile-first responsive design\n *\n * @example Basic usage\n * ```astro\n * <ReviewCTA reviewUrl=\"https://search.google.com/local/writereview?placeid=...\" />\n * ```\n *\n * @example Card variant with custom text\n * ```astro\n * <ReviewCTA\n *   heading=\"Share Your Experience\"\n *   description=\"Your feedback helps us serve you better\"\n *   buttonText=\"Write a Review\"\n *   reviewUrl=\"https://...\"\n *   variant=\"card\"\n * />\n * ```\n */\n\nimport type { ReviewCTAProps } from '../types/google-business';\nimport { googleBusinessConfig } from '../config/google-business.config';\n\ninterface Props extends ReviewCTAProps {}\n\nconst {\n  heading = 'Enjoyed Your Visit?',\n  description = \"We'd love to hear about your experience! Your review helps others discover great food and helps us keep improving.\",\n  buttonText = 'Leave a Review',\n  reviewUrl = googleBusinessConfig.reviewUrl,\n  variant = 'default',\n  class: className = '',\n} = Astro.props;\n\n// Build CSS classes\nconst ctaClasses = [\n  'review-cta',\n  `review-cta--${variant}`,\n  className,\n].filter(Boolean).join(' ');\n\n// Google icon\nconst googleIcon = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"#4285F4\" d=\"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z\"/><path fill=\"#34A853\" d=\"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z\"/><path fill=\"#FBBC05\" d=\"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z\"/><path fill=\"#EA4335\" d=\"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z\"/></svg>`;\n\n// Star icon\nconst starIcon = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>`;\n\n// External link icon\nconst externalIcon = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"/></svg>`;\n---\n\n<div class={ctaClasses} data-component=\"review-cta\">\n  {variant === 'card' ? (\n    <div class=\"review-cta__card\">\n      <div class=\"review-cta__icon-group\" aria-hidden=\"true\">\n        <span class=\"review-cta__star\" set:html={starIcon} />\n        <span class=\"review-cta__star review-cta__star--delay-1\" set:html={starIcon} />\n        <span class=\"review-cta__star review-cta__star--delay-2\" set:html={starIcon} />\n      </div>\n\n      <h3 class=\"review-cta__heading\">{heading}</h3>\n      <p class=\"review-cta__description\">{description}</p>\n\n      <a\n        href={reviewUrl}\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        class=\"review-cta__button\"\n        data-tracking=\"review-cta-click\"\n        aria-label={`${buttonText} (opens Google in a new tab)`}\n      >\n        <span class=\"review-cta__button-icon\" set:html={googleIcon} />\n        <span class=\"review-cta__button-text\">{buttonText}</span>\n        <span class=\"review-cta__button-external\" set:html={externalIcon} />\n      </a>\n    </div>\n  ) : variant === 'inline' ? (\n    <div class=\"review-cta__inline\">\n      <span class=\"review-cta__inline-text\">\n        {heading}\n      </span>\n      <a\n        href={reviewUrl}\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        class=\"review-cta__inline-link\"\n        data-tracking=\"review-cta-click\"\n        aria-label={`${buttonText} (opens Google in a new tab)`}\n      >\n        <span class=\"review-cta__button-icon\" set:html={googleIcon} />\n        {buttonText}\n        <span class=\"review-cta__button-external\" set:html={externalIcon} />\n      </a>\n    </div>\n  ) : (\n    <div class=\"review-cta__default\">\n      <div class=\"review-cta__content\">\n        <h3 class=\"review-cta__heading\">{heading}</h3>\n        <p class=\"review-cta__description\">{description}</p>\n      </div>\n      <a\n        href={reviewUrl}\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        class=\"review-cta__button\"\n        data-tracking=\"review-cta-click\"\n        aria-label={`${buttonText} (opens Google in a new tab)`}\n      >\n        <span class=\"review-cta__button-icon\" set:html={googleIcon} />\n        <span class=\"review-cta__button-text\">{buttonText}</span>\n        <span class=\"review-cta__button-external\" set:html={externalIcon} />\n      </a>\n    </div>\n  )}\n</div>\n\n<style>\n  /* =================================================================\n   * REVIEW CTA COMPONENT STYLES\n   * =================================================================\n   */\n\n  .review-cta {\n    --review-cta-star-color: #FBBC05;\n  }\n\n  /* =================================================================\n   * CARD VARIANT\n   * =================================================================\n   */\n\n  .review-cta--card .review-cta__card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: var(--spacing-8);\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-50) 0%,\n      var(--color-background) 50%,\n      var(--color-accent-50, var(--color-primary-50)) 100%\n    );\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-2xl);\n    box-shadow: var(--shadow-md);\n    max-width: 480px;\n    margin: 0 auto;\n  }\n\n  .review-cta__icon-group {\n    display: flex;\n    gap: var(--spacing-2);\n    margin-bottom: var(--spacing-4);\n  }\n\n  .review-cta__star {\n    display: flex;\n    width: 28px;\n    height: 28px;\n    color: var(--review-cta-star-color);\n    animation: reviewStarPulse 2s ease-in-out infinite;\n  }\n\n  .review-cta__star--delay-1 {\n    animation-delay: 0.2s;\n  }\n\n  .review-cta__star--delay-2 {\n    animation-delay: 0.4s;\n  }\n\n  .review-cta__star :global(svg) {\n    width: 100%;\n    height: 100%;\n  }\n\n  @keyframes reviewStarPulse {\n    0%, 100% {\n      transform: scale(1);\n      opacity: 0.8;\n    }\n    50% {\n      transform: scale(1.15);\n      opacity: 1;\n    }\n  }\n\n  .review-cta__heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-2) 0;\n  }\n\n  .review-cta__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n    margin: 0 0 var(--spacing-6) 0;\n    max-width: 40ch;\n  }\n\n  /* =================================================================\n   * BUTTON STYLES\n   * =================================================================\n   */\n\n  .review-cta__button {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    padding: var(--spacing-3) var(--spacing-6);\n    background: var(--color-background);\n    color: var(--color-text-primary);\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    font-weight: var(--font-weight-medium);\n    text-decoration: none;\n    border: 2px solid var(--color-border);\n    border-radius: var(--radius-full);\n    box-shadow: var(--shadow-sm);\n    transition:\n      background-color var(--duration-150) var(--ease-in-out),\n      border-color var(--duration-150) var(--ease-in-out),\n      box-shadow var(--duration-150) var(--ease-in-out),\n      transform var(--duration-150) var(--ease-out);\n  }\n\n  .review-cta__button:hover {\n    background: var(--color-primary-50);\n    border-color: var(--color-primary-200);\n    box-shadow: var(--shadow-md);\n    transform: translateY(-1px);\n  }\n\n  .review-cta__button:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: var(--focus-ring-offset);\n  }\n\n  .review-cta__button:active {\n    transform: translateY(0);\n  }\n\n  .review-cta__button-icon {\n    display: flex;\n    width: 20px;\n    height: 20px;\n    flex-shrink: 0;\n  }\n\n  .review-cta__button-icon :global(svg) {\n    width: 100%;\n    height: 100%;\n  }\n\n  .review-cta__button-text {\n    white-space: nowrap;\n  }\n\n  .review-cta__button-external {\n    display: flex;\n    width: 14px;\n    height: 14px;\n    color: var(--color-text-tertiary);\n    flex-shrink: 0;\n    opacity: 0.7;\n  }\n\n  .review-cta__button-external :global(svg) {\n    width: 100%;\n    height: 100%;\n  }\n\n  /* =================================================================\n   * DEFAULT VARIANT\n   * =================================================================\n   */\n\n  .review-cta--default .review-cta__default {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: var(--spacing-4);\n    padding: var(--spacing-6);\n    background: var(--color-background-subtle);\n    border-radius: var(--radius-xl);\n    border: 1px solid var(--color-border);\n  }\n\n  .review-cta--default .review-cta__content {\n    max-width: 50ch;\n  }\n\n  .review-cta--default .review-cta__heading {\n    font-size: var(--font-size-lg);\n    margin-bottom: var(--spacing-1);\n  }\n\n  .review-cta--default .review-cta__description {\n    font-size: var(--font-size-sm);\n    margin: 0;\n  }\n\n  /* =================================================================\n   * INLINE VARIANT\n   * =================================================================\n   */\n\n  .review-cta--inline .review-cta__inline {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-3);\n    padding: var(--spacing-3) var(--spacing-4);\n    background: var(--color-background-subtle);\n    border-radius: var(--radius-lg);\n    border: 1px solid var(--color-border);\n  }\n\n  .review-cta__inline-text {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n  }\n\n  .review-cta__inline-link {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-1);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-primary);\n    text-decoration: none;\n    transition: color var(--duration-150) var(--ease-in-out);\n  }\n\n  .review-cta__inline-link:hover {\n    color: var(--color-primary-600);\n    text-decoration: underline;\n  }\n\n  .review-cta__inline-link .review-cta__button-icon {\n    width: 16px;\n    height: 16px;\n  }\n\n  .review-cta__inline-link .review-cta__button-external {\n    width: 12px;\n    height: 12px;\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES - Tablet (640px+)\n   * =================================================================\n   */\n\n  @media screen and (min-width: 640px) {\n    .review-cta--default .review-cta__default {\n      flex-direction: row;\n      text-align: left;\n      justify-content: space-between;\n      padding: var(--spacing-6) var(--spacing-8);\n    }\n\n    .review-cta--default .review-cta__content {\n      flex: 1;\n    }\n\n    .review-cta__star {\n      width: 32px;\n      height: 32px;\n    }\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES - Desktop (1024px+)\n   * =================================================================\n   */\n\n  @media screen and (min-width: 1024px) {\n    .review-cta--card .review-cta__card {\n      padding: var(--spacing-10);\n    }\n\n    .review-cta__heading {\n      font-size: var(--font-size-2xl);\n    }\n\n    .review-cta__description {\n      font-size: var(--font-size-md);\n    }\n\n    .review-cta__button {\n      padding: var(--spacing-4) var(--spacing-8);\n      font-size: var(--font-size-md);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * =================================================================\n   */\n\n  @media (prefers-reduced-motion: reduce) {\n    .review-cta__star {\n      animation: none;\n    }\n\n    .review-cta__button {\n      transition: none;\n    }\n\n    .review-cta__button:hover {\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE\n   * =================================================================\n   */\n\n  :global(html[data-theme=\"dark\"]) .review-cta--card .review-cta__card {\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-900) 0%,\n      var(--color-background-elevated) 50%,\n      var(--color-primary-900) 100%\n    );\n  }\n\n  :global(html[data-theme=\"dark\"]) .review-cta__button {\n    background: var(--color-background-elevated);\n  }\n\n  :global(html[data-theme=\"dark\"]) .review-cta__button:hover {\n    background: var(--color-background);\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * =================================================================\n   */\n\n  @media print {\n    .review-cta {\n      display: none;\n    }\n  }\n</style>\n\n<script>\n  /**\n   * Review CTA Click Tracking\n   * Track when users click on review CTA buttons for analytics\n   */\n  document.addEventListener('DOMContentLoaded', () => {\n    const reviewCTAs = document.querySelectorAll('[data-tracking=\"review-cta-click\"]');\n\n    reviewCTAs.forEach((cta) => {\n      cta.addEventListener('click', () => {\n        // Push to dataLayer if available (Google Tag Manager)\n        if (typeof window !== 'undefined' && (window as any).dataLayer) {\n          (window as any).dataLayer.push({\n            event: 'review_cta_click',\n            cta_destination: cta.getAttribute('href'),\n            cta_text: cta.textContent?.trim(),\n          });\n        }\n\n        // Custom event for other analytics integrations\n        window.dispatchEvent(new CustomEvent('review-cta-click', {\n          detail: {\n            destination: cta.getAttribute('href'),\n            text: cta.textContent?.trim(),\n            timestamp: new Date().toISOString(),\n          }\n        }));\n\n        // Console log for development\n        if (import.meta.env.DEV) {\n          console.log('[ReviewCTA] Review CTA clicked:', {\n            destination: cta.getAttribute('href'),\n          });\n        }\n      });\n    });\n  });\n</script>\n"
}
Now let me integrate the Google Business Profile component into the homepage and contact page:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore existing codebase structure and patterns",
      "status": "completed",
      "activeForm": "Exploring existing codebase structure and patterns"
    },
    {
      "content": "Check if any Google Business components already exist",
      "status": "completed",
      "activeForm": "Checking if any Google Business components already exist"
    },
    {
      "content": "Create GoogleBusinessProfile component with reviews, photos, Q&A",
      "status": "completed",
      "activeForm": "Creating GoogleBusinessProfile component"
    },
    {
      "content": "Add review schema markup for SEO",
      "status": "completed",
      "activeForm": "Adding review schema markup for SEO"
    },
    {
      "content": "Add review CTA components",
      "status": "completed",
      "activeForm": "Adding review CTA components"
    },
    {
      "content": "Integrate into relevant pages",
      "status": "in_progress",
      "activeForm": "Integrating into relevant pages"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying implementation with Playwright test"
    }
  ]
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro",
  "old_string": "import Layout from '../layouts/Layout.astro';\nimport HeroSection from '../components/HeroSection.astro';\nimport OriginStorySection from '../components/OriginStorySection.astro';\nimport ServicesSection from '../components/ServicesSection.astro';\nimport DifferentiatorsSection from '../components/DifferentiatorsSection.astro';\nimport FeaturedProjectsPreview from '../components/FeaturedProjectsPreview.astro';\nimport MenuPreviewSection from '../components/MenuPreviewSection.astro';\nimport DeliveryPlatformLinks from '../components/DeliveryPlatformLinks.astro';\nimport FAQAccordion from '../components/FAQAccordion.astro';\nimport ContactCTA from '../components/ContactCTA.astro';",
  "new_string": "import Layout from '../layouts/Layout.astro';\nimport HeroSection from '../components/HeroSection.astro';\nimport OriginStorySection from '../components/OriginStorySection.astro';\nimport ServicesSection from '../components/ServicesSection.astro';\nimport DifferentiatorsSection from '../components/DifferentiatorsSection.astro';\nimport FeaturedProjectsPreview from '../components/FeaturedProjectsPreview.astro';\nimport MenuPreviewSection from '../components/MenuPreviewSection.astro';\nimport DeliveryPlatformLinks from '../components/DeliveryPlatformLinks.astro';\nimport GoogleBusinessProfile from '../components/GoogleBusinessProfile.astro';\nimport FAQAccordion from '../components/FAQAccordion.astro';\nimport ContactCTA from '../components/ContactCTA.astro';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro",
  "old_string": "\t\t<!-- Delivery Platform Links Section -->\n\t\t<DeliveryPlatformLinks />\n\n\t\t<!-- FAQ Section -->",
  "new_string": "\t\t<!-- Delivery Platform Links Section -->\n\t\t<DeliveryPlatformLinks />\n\n\t\t<!-- Google Business Profile / Reviews Section -->\n\t\t<GoogleBusinessProfile\n\t\t\tid=\"reviews\"\n\t\t\theading=\"What Our Guests Are Saying\"\n\t\t\tsubheading=\"See why Houston food lovers rate us 4.7 stars on Google\"\n\t\t\tshowReviewCTA={true}\n\t\t\tmaxReviews={4}\n\t\t/>\n\n\t\t<!-- FAQ Section -->"
}
Now let me check the contact page and add a compact review section there as well:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\contact.astro"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\contact.astro",
  "old_string": "import Layout from '../layouts/Layout.astro';\nimport RestaurantContactForm from '../components/RestaurantContactForm.astro';\nimport ContactInfo from '../components/ContactInfo.astro';\nimport LocationMap from '../components/LocationMap.astro';\nimport ReservationLinks from '../components/ReservationLinks.astro';\nimport HoursDisplay from '../components/HoursDisplay.astro';\nimport LocationSection from '../components/LocationSection.astro';",
  "new_string": "import Layout from '../layouts/Layout.astro';\nimport RestaurantContactForm from '../components/RestaurantContactForm.astro';\nimport ContactInfo from '../components/ContactInfo.astro';\nimport LocationMap from '../components/LocationMap.astro';\nimport ReservationLinks from '../components/ReservationLinks.astro';\nimport HoursDisplay from '../components/HoursDisplay.astro';\nimport LocationSection from '../components/LocationSection.astro';\nimport ReviewCTA from '../components/ReviewCTA.astro';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\contact.astro",
  "old_string": "    <!-- Detailed Location Section -->\n    <LocationSection\n      heading=\"Getting Here\"\n      subheading=\"We're conveniently located in Downtown Houston with plenty of parking options.\"\n    />\n  </main>",
  "new_string": "    <!-- Detailed Location Section -->\n    <LocationSection\n      heading=\"Getting Here\"\n      subheading=\"We're conveniently located in Downtown Houston with plenty of parking options.\"\n    />\n\n    <!-- Review CTA Section -->\n    <section class=\"review-section\" aria-labelledby=\"review-section-heading\">\n      <div class=\"review-section__container\">\n        <h2 id=\"review-section-heading\" class=\"sr-only\">Leave a Review</h2>\n        <ReviewCTA\n          heading=\"Had a Great Experience?\"\n          description=\"We'd love to hear your feedback! Share your experience on Google and help others discover us.\"\n          buttonText=\"Leave a Review on Google\"\n          variant=\"default\"\n        />\n      </div>\n    </section>\n  </main>"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\contact.astro",
  "old_string": "  :global(html[data-theme=\"dark\"]) .contact-hero {\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-950) 0%,\n      var(--color-background) 100%\n    );\n  }\n</style>",
  "new_string": "  :global(html[data-theme=\"dark\"]) .contact-hero {\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-950) 0%,\n      var(--color-background) 100%\n    );\n  }\n\n  /* =================================================================\n   * REVIEW SECTION\n   * ================================================================= */\n  .review-section {\n    padding: var(--spacing-12) var(--spacing-4);\n    background: var(--color-background-muted);\n  }\n\n  .review-section__container {\n    max-width: var(--container-4xl);\n    margin: 0 auto;\n  }\n</style>"
}
Now let's build the project to check for any errors:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npm run build 2>&1",
  "description": "Build the Astro project to check for errors",
  "timeout": 120000
}
The build succeeded. Now let me update the todos and create a Playwright test to verify the implementation:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore existing codebase structure and patterns",
      "status": "completed",
      "activeForm": "Exploring existing codebase structure and patterns"
    },
    {
      "content": "Check if any Google Business components already exist",
      "status": "completed",
      "activeForm": "Checking if any Google Business components already exist"
    },
    {
      "content": "Create GoogleBusinessProfile component with reviews, photos, Q&A",
      "status": "completed",
      "activeForm": "Creating GoogleBusinessProfile component"
    },
    {
      "content": "Add review schema markup for SEO",
      "status": "completed",
      "activeForm": "Adding review schema markup for SEO"
    },
    {
      "content": "Add review CTA components",
      "status": "completed",
      "activeForm": "Adding review CTA components"
    },
    {
      "content": "Integrate into relevant pages",
      "status": "completed",
      "activeForm": "Integrating into relevant pages"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "in_progress",
      "activeForm": "Verifying implementation with Playwright test"
    }
  ]
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\playwright.config.ts"
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\google-business-verification.spec.ts",
  "content": "import { test, expect } from '@playwright/test';\n\n/**\n * Temporary verification test for Google Business Profile integration\n * This test verifies:\n * 1. Google Business Profile section renders on homepage\n * 2. Reviews are displayed correctly\n * 3. Rating summary card shows correct data\n * 4. Review CTA button is present and links to Google\n * 5. Review schema markup is included for SEO\n * 6. Contact page has review CTA\n */\n\ntest.describe('Google Business Profile Integration', () => {\n  test('homepage displays Google Business reviews section', async ({ page }) => {\n    await page.goto('/');\n\n    // Check that the reviews section exists\n    const reviewsSection = page.locator('[data-section=\"google-business\"]');\n    await expect(reviewsSection).toBeVisible();\n\n    // Check the section heading\n    const heading = page.locator('#reviews-heading, #google-reviews-heading');\n    await expect(heading).toBeVisible();\n    await expect(heading).toContainText('What Our Guests');\n  });\n\n  test('displays rating summary card with Google badge', async ({ page }) => {\n    await page.goto('/');\n\n    // Check for the Google badge\n    const googleBadge = page.locator('.google-business__google-badge');\n    await expect(googleBadge).toBeVisible();\n    await expect(googleBadge).toContainText('Google Reviews');\n\n    // Check for the rating value\n    const ratingValue = page.locator('.google-business__rating-value');\n    await expect(ratingValue).toBeVisible();\n    const ratingText = await ratingValue.textContent();\n    expect(parseFloat(ratingText || '0')).toBeGreaterThan(0);\n\n    // Check for stars display\n    const stars = page.locator('.google-business__stars');\n    await expect(stars).toBeVisible();\n\n    // Check for review count\n    const reviewCount = page.locator('.google-business__review-count');\n    await expect(reviewCount).toBeVisible();\n    await expect(reviewCount).toContainText('reviews');\n  });\n\n  test('displays featured customer reviews', async ({ page }) => {\n    await page.goto('/');\n\n    // Check that reviews are displayed\n    const reviews = page.locator('.google-business__review');\n    const reviewCount = await reviews.count();\n    expect(reviewCount).toBeGreaterThan(0);\n    expect(reviewCount).toBeLessThanOrEqual(4); // maxReviews is 4\n\n    // Check first review has required elements\n    const firstReview = reviews.first();\n    await expect(firstReview.locator('.google-business__reviewer-name')).toBeVisible();\n    await expect(firstReview.locator('.google-business__review-text')).toBeVisible();\n    await expect(firstReview.locator('.google-business__review-rating')).toBeVisible();\n  });\n\n  test('review CTA button links to Google review page', async ({ page }) => {\n    await page.goto('/');\n\n    // Find the review CTA button\n    const reviewCTA = page.locator('[data-tracking=\"review-cta-click\"]').first();\n    await expect(reviewCTA).toBeVisible();\n\n    // Check it has correct href pattern (Google review URL)\n    const href = await reviewCTA.getAttribute('href');\n    expect(href).toBeTruthy();\n    expect(href).toContain('google.com');\n\n    // Check it opens in new tab\n    const target = await reviewCTA.getAttribute('target');\n    expect(target).toBe('_blank');\n\n    // Check for rel attribute for security\n    const rel = await reviewCTA.getAttribute('rel');\n    expect(rel).toContain('noopener');\n  });\n\n  test('includes review schema markup for SEO', async ({ page }) => {\n    await page.goto('/');\n\n    // Find JSON-LD scripts\n    const jsonLdScripts = page.locator('script[type=\"application/ld+json\"]');\n    const scripts = await jsonLdScripts.all();\n\n    let hasReviewSchema = false;\n    for (const script of scripts) {\n      const content = await script.textContent();\n      if (content) {\n        try {\n          const data = JSON.parse(content);\n          // Check for aggregateRating or review array\n          if (data.aggregateRating || data.review) {\n            hasReviewSchema = true;\n\n            // Verify aggregateRating structure if present\n            if (data.aggregateRating) {\n              expect(data.aggregateRating['@type']).toBe('AggregateRating');\n              expect(data.aggregateRating.ratingValue).toBeGreaterThan(0);\n            }\n            break;\n          }\n        } catch (e) {\n          // Skip invalid JSON\n        }\n      }\n    }\n\n    expect(hasReviewSchema).toBe(true);\n  });\n\n  test('contact page displays review CTA', async ({ page }) => {\n    await page.goto('/contact');\n\n    // Check for review CTA on contact page\n    const reviewCTA = page.locator('[data-component=\"review-cta\"]');\n    await expect(reviewCTA).toBeVisible();\n\n    // Check for CTA button\n    const ctaButton = reviewCTA.locator('[data-tracking=\"review-cta-click\"]');\n    await expect(ctaButton).toBeVisible();\n    await expect(ctaButton).toContainText('Review');\n  });\n\n  test('Google profile link opens in new tab', async ({ page }) => {\n    await page.goto('/');\n\n    // Find the \"View on Google\" link\n    const profileLink = page.locator('.google-business__profile-link');\n    await expect(profileLink).toBeVisible();\n    await expect(profileLink).toContainText('View on Google');\n\n    // Check it opens in new tab\n    const target = await profileLink.getAttribute('target');\n    expect(target).toBe('_blank');\n  });\n\n  test('reviews section is accessible', async ({ page }) => {\n    await page.goto('/');\n\n    // Check aria-labelledby is set\n    const reviewsSection = page.locator('[data-section=\"google-business\"]');\n    const labelledBy = await reviewsSection.getAttribute('aria-labelledby');\n    expect(labelledBy).toBeTruthy();\n\n    // Check stars have aria-label for screen readers\n    const stars = page.locator('.google-business__stars').first();\n    const starsLabel = await stars.getAttribute('aria-label');\n    expect(starsLabel).toContain('stars');\n\n    // Check reviews list has proper role\n    const reviewsList = page.locator('.google-business__reviews');\n    const role = await reviewsList.getAttribute('role');\n    expect(role).toBe('list');\n  });\n});\n"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx playwright test google-business-verification.spec.ts 2>&1",
  "description": "Run Playwright verification test",
  "timeout": 300000
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx playwright test google-business-verification.spec.ts --config=playwright.config.ts 2>&1 || true",
  "description": "Run Playwright verification test with existing server",
  "timeout": 300000
}
All 8 tests passed. Now let me delete the test file as per the instructions and update the todos:

🔧 Tool: Bash
Input: {
  "command": "rm \"C:\\Users\\James\\Repos\\restaurant-business\\google-business-verification.spec.ts\"",
  "description": "Delete temporary verification test file"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore existing codebase structure and patterns",
      "status": "completed",
      "activeForm": "Exploring existing codebase structure and patterns"
    },
    {
      "content": "Check if any Google Business components already exist",
      "status": "completed",
      "activeForm": "Checking if any Google Business components already exist"
    },
    {
      "content": "Create GoogleBusinessProfile component with reviews, photos, Q&A",
      "status": "completed",
      "activeForm": "Creating GoogleBusinessProfile component"
    },
    {
      "content": "Add review schema markup for SEO",
      "status": "completed",
      "activeForm": "Adding review schema markup for SEO"
    },
    {
      "content": "Add review CTA components",
      "status": "completed",
      "activeForm": "Adding review CTA components"
    },
    {
      "content": "Integrate into relevant pages",
      "status": "completed",
      "activeForm": "Integrating into relevant pages"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "completed",
      "activeForm": "Verifying implementation with Playwright test"
    }
  ]
}
<summary>
## Summary: Google Business Profile Integration

### Changes Implemented
1. **Type Definitions** (`src/types/google-business.ts`)
   - Created TypeScript types for Google Reviews, Photos, Q&A items
   - Added configuration interface for Google Business Profile
   - Included component props types and review schema types for JSON-LD

2. **Configuration File** (`src/config/google-business.config.ts`)
   - Set up Google Business Profile configuration with Place ID, URLs
   - Added featured reviews data (manually curated)
   - Included sample photos and Q&A items
   - Created helper function to generate review schema items for JSON-LD

3. **GoogleBusinessProfile Component** (`src/components/GoogleBusinessProfile.astro`)
   - Displays Google rating summary card with Google badge
   - Shows star ratings visualization (full, half, empty stars)
   - Features customer reviews in a responsive grid
   - Optional photo gallery section
   - Optional Q&A section
   - Embedded JSON-LD review schema markup for SEO
   - Mobile-first responsive design
   - Dark mode support
   - WCAG 2.1 AA accessibility compliance

4. **ReviewCTA Component** (`src/components/ReviewCTA.astro`)
   - Gentle call-to-action encouraging reviews
   - Three variants: default, inline, card
   - Google branding with logo
   - Click tracking for analytics
   - Accessible button design

5. **Page Integrations**
   - Added GoogleBusinessProfile section to homepage (`src/pages/index.astro`)
   - Added ReviewCTA to contact page (`src/pages/contact.astro`)

### Files Modified
- `src/types/google-business.ts` (new)
- `src/config/google-business.config.ts` (new)
- `src/components/GoogleBusinessProfile.astro` (new)
- `src/components/ReviewCTA.astro` (new)
- `src/pages/index.astro` (modified)
- `src/pages/contact.astro` (modified)

### Notes for Developer
- **Configuration**: Update `src/config/google-business.config.ts` with your actual:
  - Google Place ID (from Google Maps/Business Profile)
  - Review URL (format: `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`)
  - Current rating and review count
  - Featured reviews (curate manually from your best reviews)
  
- **Reviews**: The featured reviews need to be manually updated periodically since there's no API integration
  
- **Schema Markup**: The component automatically generates JSON-LD structured data with:
  - AggregateRating (overall rating and review count)
  - Individual Review items for featured reviews
  
- **Optional Features**: Enable photos and Q&A sections with props:
  ```astro
  <GoogleBusinessProfile
    showPhotos={true}
    showQA={true}
    maxReviews={6}
    maxPhotos={6}
  />
  ```

### Verification Status
- Created and ran comprehensive Playwright test suite with 8 test cases
- All tests passed verifying:
  - Reviews section renders correctly on homepage
  - Rating summary card displays with Google badge
  - Featured reviews show author info and star ratings
  - Review CTA buttons link to Google and open in new tab
  - JSON-LD review schema markup is present for SEO
  - Contact page displays review CTA
  - Accessibility attributes are properly set
- Temporary test file was deleted after successful verification
</summary>