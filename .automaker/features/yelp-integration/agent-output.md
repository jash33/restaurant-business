
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore this codebase to understand its structure. I need to implement a Yelp integration feature that adds a Yelp badge, review highlights, and link to the full Yelp page. \n\nPlease find:\n1. The overall project structure (what framework is used - React, Vue, etc.)\n2. Where components are located\n3. Any existing third-party integrations or badges\n4. The styling approach (CSS modules, Tailwind, styled-components, etc.)\n5. Any configuration files for API keys or external services\n\nBe thorough - look at package.json, the src folder structure, and any existing similar components.",
  "subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\astro.config.mjs"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\globals.css"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/config/**"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/components/*Badge*"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\FloatingHoursBadge.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\GoogleBusinessProfile.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\google-business.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\.env.example"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\restaurant-business\\src\" -type f -name \"*.ts\" -o -name \"*.tsx\" | head -20",
  "description": "List TypeScript files in src directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\google-business.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/components/Review*"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/components/*Badge*"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\\"",
  "description": "List layout files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ReviewCTA.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\DeliveryPlatformLinks.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\delivery-platforms.config.ts"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\" -maxdepth 1 -type f -name \"*.astro\" | head -15",
  "description": "List main astro pages"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro",
  "limit": 50
}
Now I have a comprehensive understanding of the codebase. Let me implement the Yelp integration feature following the established patterns. I'll create:

1. TypeScript types for Yelp data
2. Yelp configuration file
3. YelpBadge component
4. YelpReviews component (with highlights and link to full page)

Let me start by reading some of the existing files to understand their exact patterns:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\google-business.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\google-business.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\GoogleBusinessProfile.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\.env.example"
}
Now let me also check the pages where Google Business Profile is used to understand how components are integrated:

🔧 Tool: Glob
Input: {
  "pattern": "src/pages/**/*.astro",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\about.astro"
}
Now I have a thorough understanding of the codebase. Let me create the Yelp integration following the existing patterns. I'll create:

1. `src/types/yelp.ts` - TypeScript interfaces
2. `src/config/yelp.config.ts` - Configuration with sample data
3. `src/components/YelpBadge.astro` - Badge component 
4. `src/components/YelpReviews.astro` - Reviews with highlights and link

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for Yelp integration",
      "status": "in_progress",
      "activeForm": "Creating TypeScript types for Yelp integration"
    },
    {
      "content": "Create Yelp configuration file with sample data",
      "status": "pending",
      "activeForm": "Creating Yelp configuration file"
    },
    {
      "content": "Create YelpBadge component with Yelp branding",
      "status": "pending",
      "activeForm": "Creating YelpBadge component"
    },
    {
      "content": "Create YelpReviews component with highlights and link",
      "status": "pending",
      "activeForm": "Creating YelpReviews component"
    },
    {
      "content": "Add Yelp component to a page (about or index)",
      "status": "pending",
      "activeForm": "Adding Yelp component to page"
    },
    {
      "content": "Update .env.example with Yelp configuration",
      "status": "pending",
      "activeForm": "Updating .env.example"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\yelp.ts",
  "content": "/**\n * Yelp Integration TypeScript Types\n * Type definitions for Yelp business profile integration components\n *\n * Note: Review content follows Yelp's Terms of Service and brand guidelines.\n * Display requirements: https://www.yelp.com/brand\n */\n\n/**\n * Individual review from Yelp\n * Must include proper attribution per Yelp brand guidelines\n */\nexport interface YelpReview {\n  /** Reviewer's display name */\n  authorName: string;\n  /** URL to reviewer's profile picture (optional) */\n  authorPhotoUrl?: string;\n  /** Rating value (1-5 stars) */\n  rating: number;\n  /** Review text content (may be excerpted per Yelp guidelines) */\n  text: string;\n  /** Relative time description (e.g., \"2 weeks ago\") */\n  relativeTimeDescription: string;\n  /** ISO date string of when the review was posted */\n  time?: string;\n  /** Link to the full review on Yelp (required for attribution) */\n  reviewUrl?: string;\n}\n\n/**\n * Highlighted excerpt from a review\n * Short, impactful quotes to feature\n */\nexport interface YelpReviewHighlight {\n  /** The highlighted text excerpt */\n  excerpt: string;\n  /** Author of the review */\n  authorName: string;\n  /** Rating associated with this review */\n  rating: number;\n  /** Optional category for the highlight (food, service, ambiance, etc.) */\n  category?: 'food' | 'service' | 'ambiance' | 'value' | 'overall';\n}\n\n/**\n * Yelp Business Profile Configuration\n */\nexport interface YelpConfig {\n  /** Yelp Business ID */\n  businessId: string;\n  /** Business name as shown on Yelp */\n  businessName: string;\n  /** Direct URL to the Yelp business page */\n  profileUrl: string;\n  /** URL to leave a review on Yelp */\n  reviewUrl: string;\n  /** Overall rating (1-5, with 0.5 increments) */\n  rating: number;\n  /** Total number of reviews */\n  totalReviews: number;\n  /** Featured reviews to display (curated selection) */\n  featuredReviews: YelpReview[];\n  /** Short, impactful highlights from reviews */\n  reviewHighlights?: YelpReviewHighlight[];\n  /** Last updated date for the data */\n  lastUpdated?: string;\n  /** Price level (1-4 dollar signs) */\n  priceLevel?: 1 | 2 | 3 | 4;\n  /** Business categories from Yelp */\n  categories?: string[];\n}\n\n/**\n * Props for the YelpBadge component\n */\nexport interface YelpBadgeProps {\n  /** Badge size variant */\n  size?: 'small' | 'medium' | 'large';\n  /** Show rating value */\n  showRating?: boolean;\n  /** Show review count */\n  showReviewCount?: boolean;\n  /** Additional CSS classes */\n  class?: string;\n  /** Link to Yelp page on click */\n  linkToYelp?: boolean;\n  /** Variant style */\n  variant?: 'default' | 'compact' | 'inline';\n}\n\n/**\n * Props for the YelpReviews component\n */\nexport interface YelpReviewsProps {\n  /** Section ID for anchor links */\n  id?: string;\n  /** Section heading text */\n  heading?: string;\n  /** Section subheading/description */\n  subheading?: string;\n  /** Additional CSS classes */\n  class?: string;\n  /** Maximum number of reviews to display */\n  maxReviews?: number;\n  /** Show review highlights section */\n  showHighlights?: boolean;\n  /** Maximum number of highlights to display */\n  maxHighlights?: number;\n  /** Show CTA to leave a review */\n  showReviewCTA?: boolean;\n  /** Show link to full Yelp page */\n  showYelpLink?: boolean;\n  /** Layout variant */\n  variant?: 'default' | 'compact' | 'featured';\n}\n\n/**\n * Review schema for JSON-LD structured data\n */\nexport interface YelpReviewSchema {\n  '@type': 'Review';\n  author: {\n    '@type': 'Person';\n    name: string;\n  };\n  reviewRating: {\n    '@type': 'Rating';\n    ratingValue: number;\n    bestRating: number;\n    worstRating: number;\n  };\n  reviewBody?: string;\n  datePublished?: string;\n}\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for Yelp integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for Yelp integration"
    },
    {
      "content": "Create Yelp configuration file with sample data",
      "status": "in_progress",
      "activeForm": "Creating Yelp configuration file"
    },
    {
      "content": "Create YelpBadge component with Yelp branding",
      "status": "pending",
      "activeForm": "Creating YelpBadge component"
    },
    {
      "content": "Create YelpReviews component with highlights and link",
      "status": "pending",
      "activeForm": "Creating YelpReviews component"
    },
    {
      "content": "Add Yelp component to a page (about or index)",
      "status": "pending",
      "activeForm": "Adding Yelp component to page"
    },
    {
      "content": "Update .env.example with Yelp configuration",
      "status": "pending",
      "activeForm": "Updating .env.example"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\yelp.config.ts",
  "content": "/**\n * Yelp Business Profile Configuration\n * Configuration for Yelp integration including profile links, featured reviews,\n * and review highlights.\n *\n * IMPORTANT: This integration follows Yelp's Terms of Service and Brand Guidelines.\n * - Always link back to the Yelp page when displaying reviews\n * - Include proper Yelp attribution (logo + \"Yelp\" text)\n * - Do not modify review content\n * - See: https://www.yelp.com/brand\n *\n * To update this data:\n * 1. Visit your Yelp Business Page\n * 2. Copy your Business ID from the URL (e.g., main-street-bistro-houston)\n * 3. Update the rating and review count from your dashboard\n * 4. Manually curate featured reviews for display (with proper attribution)\n */\n\nimport type { YelpConfig, YelpReviewSchema } from '../types/yelp';\n\n/**\n * Yelp Brand Colors\n * Official Yelp brand colors for consistent styling\n * Source: https://www.yelp.com/brand\n */\nexport const YELP_COLORS = {\n  /** Yelp Red - Primary brand color */\n  red: '#FF1A1A',\n  /** Yelp Red Dark - For hover states */\n  redDark: '#D32323',\n  /** Star color for ratings */\n  star: '#FF1A1A',\n  /** Background for badges */\n  background: '#FFFFFF',\n} as const;\n\n/**\n * Yelp Business Profile Settings\n * Update these values with your actual Yelp Business Profile data\n */\nexport const yelpConfig: YelpConfig = {\n  // === Business Identification ===\n  // Find your Business ID in your Yelp business page URL\n  businessId: 'main-street-bistro-houston',\n\n  // Business name as displayed on Yelp\n  businessName: 'The Main Street Bistro',\n\n  // === Profile URLs ===\n  // Main Yelp business page URL\n  profileUrl: 'https://www.yelp.com/biz/main-street-bistro-houston',\n\n  // Direct link to write a review\n  // Format: https://www.yelp.com/writeareview/biz/BUSINESS_ID\n  reviewUrl: 'https://www.yelp.com/writeareview/biz/main-street-bistro-houston',\n\n  // === Ratings & Reviews Summary ===\n  // Update these values periodically from your Yelp dashboard\n  rating: 4.5,\n  totalReviews: 287,\n\n  // Price level (1-4 dollar signs)\n  priceLevel: 3,\n\n  // Business categories\n  categories: ['American (New)', 'Farm to Table', 'Wine Bars'],\n\n  // === Featured Reviews ===\n  // Curate 3-4 of your best reviews for display\n  // IMPORTANT: Keep reviews verbatim - do not modify content\n  featuredReviews: [\n    {\n      authorName: 'Amanda T.',\n      rating: 5,\n      text: \"This place is an absolute gem! The farm-to-table concept really shines through in every dish. We had the seasonal tasting menu and every course was perfectly executed. The wine pairings suggested by our server were spot-on. Already planning our next visit!\",\n      relativeTimeDescription: '1 week ago',\n      time: '2024-01-19T20:00:00Z',\n      reviewUrl: 'https://www.yelp.com/biz/main-street-bistro-houston?hrid=review1',\n    },\n    {\n      authorName: 'Robert C.',\n      rating: 5,\n      text: \"Hands down one of the best dining experiences in Houston. The ambiance is upscale but welcoming, and the service was impeccable without being stuffy. The ribeye was cooked exactly to my requested medium-rare, and the truffle mashed potatoes were divine.\",\n      relativeTimeDescription: '2 weeks ago',\n      time: '2024-01-12T19:30:00Z',\n      reviewUrl: 'https://www.yelp.com/biz/main-street-bistro-houston?hrid=review2',\n    },\n    {\n      authorName: 'Lisa M.',\n      rating: 5,\n      text: \"Celebrated our anniversary here and it was magical from start to finish. They even prepared a special dessert for us! The octopus appetizer was tender and flavorful, and the duck entree was perfectly crispy. Worth every penny.\",\n      relativeTimeDescription: '3 weeks ago',\n      time: '2024-01-05T18:45:00Z',\n      reviewUrl: 'https://www.yelp.com/biz/main-street-bistro-houston?hrid=review3',\n    },\n    {\n      authorName: 'James H.',\n      rating: 4,\n      text: \"Great food and lovely atmosphere. The brunch is particularly impressive - try the eggs benedict with house-cured salmon. Only thing to note: it can get quite busy on weekends, so definitely make a reservation. Staff is friendly and attentive.\",\n      relativeTimeDescription: '1 month ago',\n      time: '2023-12-28T11:30:00Z',\n      reviewUrl: 'https://www.yelp.com/biz/main-street-bistro-houston?hrid=review4',\n    },\n  ],\n\n  // === Review Highlights ===\n  // Short, impactful excerpts to feature prominently\n  reviewHighlights: [\n    {\n      excerpt: 'An absolute gem!',\n      authorName: 'Amanda T.',\n      rating: 5,\n      category: 'overall',\n    },\n    {\n      excerpt: 'Best dining experience in Houston',\n      authorName: 'Robert C.',\n      rating: 5,\n      category: 'overall',\n    },\n    {\n      excerpt: 'Magical from start to finish',\n      authorName: 'Lisa M.',\n      rating: 5,\n      category: 'ambiance',\n    },\n    {\n      excerpt: 'Worth every penny',\n      authorName: 'Lisa M.',\n      rating: 5,\n      category: 'value',\n    },\n    {\n      excerpt: 'Staff is friendly and attentive',\n      authorName: 'James H.',\n      rating: 4,\n      category: 'service',\n    },\n  ],\n\n  // === Last Updated ===\n  // Track when this data was last refreshed\n  lastUpdated: '2024-01-26',\n};\n\n/**\n * Export individual config items for convenience\n */\nexport const {\n  businessId,\n  businessName,\n  profileUrl,\n  reviewUrl,\n  rating,\n  totalReviews,\n  featuredReviews,\n  reviewHighlights,\n  priceLevel,\n  categories,\n} = yelpConfig;\n\n/**\n * Generate the review schema for JSON-LD structured data\n * Used for SEO and rich search results\n */\nexport function generateYelpReviewSchemaItems(): YelpReviewSchema[] {\n  return featuredReviews.map((review) => ({\n    '@type': 'Review' as const,\n    author: {\n      '@type': 'Person' as const,\n      name: review.authorName,\n    },\n    reviewRating: {\n      '@type': 'Rating' as const,\n      ratingValue: review.rating,\n      bestRating: 5,\n      worstRating: 1,\n    },\n    reviewBody: review.text,\n    datePublished: review.time,\n  }));\n}\n\n/**\n * Format price level as dollar signs\n */\nexport function formatPriceLevel(level: number): string {\n  return '$'.repeat(level);\n}\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for Yelp integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for Yelp integration"
    },
    {
      "content": "Create Yelp configuration file with sample data",
      "status": "completed",
      "activeForm": "Creating Yelp configuration file"
    },
    {
      "content": "Create YelpBadge component with Yelp branding",
      "status": "in_progress",
      "activeForm": "Creating YelpBadge component"
    },
    {
      "content": "Create YelpReviews component with highlights and link",
      "status": "pending",
      "activeForm": "Creating YelpReviews component"
    },
    {
      "content": "Add Yelp component to a page (about or index)",
      "status": "pending",
      "activeForm": "Adding Yelp component to page"
    },
    {
      "content": "Update .env.example with Yelp configuration",
      "status": "pending",
      "activeForm": "Updating .env.example"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\YelpBadge.astro",
  "content": "---\n/**\n * Yelp Badge Component\n * Displays a Yelp badge with rating, review count, and link to Yelp page.\n * Follows Yelp Brand Guidelines for proper attribution.\n *\n * Brand Guidelines: https://www.yelp.com/brand\n * - Uses official Yelp logo\n * - Links to Yelp business page\n * - Displays authentic rating and review count\n *\n * Features:\n * - Multiple size variants (small, medium, large)\n * - Star rating display\n * - Review count\n * - Link to Yelp profile\n * - WCAG 2.1 AA compliant\n * - Dark mode support\n *\n * @example Basic usage\n * ```astro\n * <YelpBadge />\n * ```\n *\n * @example Compact inline variant\n * ```astro\n * <YelpBadge variant=\"inline\" size=\"small\" />\n * ```\n */\n\nimport type { YelpBadgeProps } from '../types/yelp';\nimport { yelpConfig, YELP_COLORS } from '../config/yelp.config';\n\ninterface Props extends YelpBadgeProps {}\n\nconst {\n  size = 'medium',\n  showRating = true,\n  showReviewCount = true,\n  class: className = '',\n  linkToYelp = true,\n  variant = 'default',\n} = Astro.props;\n\n// Get data from config\nconst { rating, totalReviews, profileUrl, businessName } = yelpConfig;\n\n// Calculate full and half stars (Yelp uses 0.5 increments)\nconst fullStars = Math.floor(rating);\nconst hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;\nconst hasAlmostFullStar = rating % 1 >= 0.75;\nconst emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0) - (hasAlmostFullStar ? 1 : 0);\n\n// Adjust for almost full stars\nconst adjustedFullStars = fullStars + (hasAlmostFullStar ? 1 : 0);\nconst adjustedEmptyStars = 5 - adjustedFullStars - (hasHalfStar ? 1 : 0);\n\n// Build CSS classes\nconst badgeClasses = [\n  'yelp-badge',\n  `yelp-badge--${size}`,\n  `yelp-badge--${variant}`,\n  className,\n].filter(Boolean).join(' ');\n\n// Yelp logo SVG (simplified version following brand guidelines)\nconst yelpLogo = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n  <path fill=\"#FF1A1A\" d=\"M12.7 14.3c-.1-.1-.3-.2-.4-.1l-3.4 1.4c-.4.2-.4.7 0 .9l3.4 1.4c.2.1.4 0 .4-.2l.4-3.1c0-.1 0-.2-.1-.3h-.3zM9.3 14.8c-.1-.4-.5-.5-.8-.3l-2.8 2.1c-.3.2-.3.6.1.8l3.2 1.1c.2.1.4-.1.4-.3l-.1-3.4zM11.9 5.5c-.4-.1-.7.2-.7.5l-.2 4.8c0 .2.1.3.3.4l3.2.4c.2 0 .4-.1.4-.3l-2.5-5.6c-.1-.1-.3-.2-.5-.2zM8.8 12.3l-3.2-.9c-.4-.1-.7.2-.6.6l.9 3.2c.1.2.3.3.5.2l2.8-2.3c.2-.2.1-.5-.1-.6l-.3-.2zM15 9.5l2.3-2.4c.3-.3.2-.7-.2-.8l-3.3-.7c-.2 0-.4.1-.4.3l.6 3.4c0 .2.3.4.5.3l.5-.1z\"/>\n</svg>`;\n\n// Star SVG icons (Yelp-style filled stars)\nconst starFull = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>`;\nconst starHalf = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\" fill-opacity=\"0.3\"/><path d=\"M12 17.27V2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z\"/></svg>`;\nconst starEmpty = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\" fill-opacity=\"0.3\"/></svg>`;\n\n// Badge content wrapper\nconst WrapperTag = linkToYelp ? 'a' : 'div';\n---\n\n{linkToYelp ? (\n  <a\n    href={profileUrl}\n    target=\"_blank\"\n    rel=\"noopener noreferrer\"\n    class={badgeClasses}\n    aria-label={`View ${businessName} on Yelp - ${rating} stars from ${totalReviews} reviews (opens in new tab)`}\n    data-component=\"yelp-badge\"\n  >\n    <span class=\"yelp-badge__logo\" set:html={yelpLogo} />\n\n    {showRating && (\n      <div class=\"yelp-badge__rating\">\n        <span class=\"yelp-badge__rating-value\">{rating.toFixed(1)}</span>\n        <div class=\"yelp-badge__stars\" role=\"img\" aria-label={`${rating} out of 5 stars`}>\n          {Array(adjustedFullStars).fill(null).map(() => (\n            <span class=\"yelp-badge__star yelp-badge__star--full\" set:html={starFull} />\n          ))}\n          {hasHalfStar && (\n            <span class=\"yelp-badge__star yelp-badge__star--half\" set:html={starHalf} />\n          )}\n          {Array(adjustedEmptyStars).fill(null).map(() => (\n            <span class=\"yelp-badge__star yelp-badge__star--empty\" set:html={starEmpty} />\n          ))}\n        </div>\n      </div>\n    )}\n\n    {showReviewCount && (\n      <span class=\"yelp-badge__review-count\">\n        {totalReviews.toLocaleString()} reviews\n      </span>\n    )}\n\n    <span class=\"yelp-badge__external-icon\" aria-hidden=\"true\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n        <path d=\"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"/>\n      </svg>\n    </span>\n  </a>\n) : (\n  <div\n    class={badgeClasses}\n    data-component=\"yelp-badge\"\n  >\n    <span class=\"yelp-badge__logo\" set:html={yelpLogo} />\n\n    {showRating && (\n      <div class=\"yelp-badge__rating\">\n        <span class=\"yelp-badge__rating-value\">{rating.toFixed(1)}</span>\n        <div class=\"yelp-badge__stars\" role=\"img\" aria-label={`${rating} out of 5 stars`}>\n          {Array(adjustedFullStars).fill(null).map(() => (\n            <span class=\"yelp-badge__star yelp-badge__star--full\" set:html={starFull} />\n          ))}\n          {hasHalfStar && (\n            <span class=\"yelp-badge__star yelp-badge__star--half\" set:html={starHalf} />\n          )}\n          {Array(adjustedEmptyStars).fill(null).map(() => (\n            <span class=\"yelp-badge__star yelp-badge__star--empty\" set:html={starEmpty} />\n          ))}\n        </div>\n      </div>\n    )}\n\n    {showReviewCount && (\n      <span class=\"yelp-badge__review-count\">\n        {totalReviews.toLocaleString()} reviews\n      </span>\n    )}\n  </div>\n)}\n\n<style>\n  /* =================================================================\n   * YELP BADGE COMPONENT STYLES\n   * =================================================================\n   * Uses official Yelp brand colors per brand guidelines\n   */\n\n  .yelp-badge {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-3);\n    padding: var(--spacing-3) var(--spacing-4);\n    background: var(--color-background);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-xl);\n    box-shadow: var(--shadow-sm);\n    text-decoration: none;\n    transition:\n      transform var(--duration-150) var(--ease-out),\n      box-shadow var(--duration-150) var(--ease-out),\n      border-color var(--duration-150) var(--ease-out);\n  }\n\n  a.yelp-badge:hover {\n    transform: translateY(-2px);\n    box-shadow: var(--shadow-md);\n    border-color: #FF1A1A;\n  }\n\n  a.yelp-badge:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: 2px;\n  }\n\n  /* =================================================================\n   * LOGO\n   * =================================================================\n   */\n\n  .yelp-badge__logo {\n    display: flex;\n    flex-shrink: 0;\n  }\n\n  .yelp-badge__logo :global(svg) {\n    width: 24px;\n    height: 24px;\n  }\n\n  /* =================================================================\n   * RATING DISPLAY\n   * =================================================================\n   */\n\n  .yelp-badge__rating {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n  }\n\n  .yelp-badge__rating-value {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    line-height: 1;\n  }\n\n  .yelp-badge__stars {\n    display: flex;\n    gap: 2px;\n  }\n\n  .yelp-badge__star {\n    display: flex;\n    width: 16px;\n    height: 16px;\n    color: #FF1A1A; /* Yelp Red */\n  }\n\n  .yelp-badge__star :global(svg) {\n    width: 100%;\n    height: 100%;\n  }\n\n  /* =================================================================\n   * REVIEW COUNT\n   * =================================================================\n   */\n\n  .yelp-badge__review-count {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    white-space: nowrap;\n  }\n\n  /* =================================================================\n   * EXTERNAL LINK ICON\n   * =================================================================\n   */\n\n  .yelp-badge__external-icon {\n    display: flex;\n    margin-left: auto;\n    color: var(--color-text-tertiary);\n    transition: color var(--duration-150) var(--ease-out);\n  }\n\n  .yelp-badge__external-icon svg {\n    width: 14px;\n    height: 14px;\n  }\n\n  a.yelp-badge:hover .yelp-badge__external-icon {\n    color: #FF1A1A;\n  }\n\n  /* =================================================================\n   * SIZE VARIANTS\n   * =================================================================\n   */\n\n  /* Small */\n  .yelp-badge--small {\n    padding: var(--spacing-2) var(--spacing-3);\n    gap: var(--spacing-2);\n  }\n\n  .yelp-badge--small .yelp-badge__logo :global(svg) {\n    width: 20px;\n    height: 20px;\n  }\n\n  .yelp-badge--small .yelp-badge__rating-value {\n    font-size: var(--font-size-base);\n  }\n\n  .yelp-badge--small .yelp-badge__star {\n    width: 14px;\n    height: 14px;\n  }\n\n  .yelp-badge--small .yelp-badge__review-count {\n    font-size: var(--font-size-xs);\n  }\n\n  /* Large */\n  .yelp-badge--large {\n    padding: var(--spacing-4) var(--spacing-6);\n    gap: var(--spacing-4);\n  }\n\n  .yelp-badge--large .yelp-badge__logo :global(svg) {\n    width: 32px;\n    height: 32px;\n  }\n\n  .yelp-badge--large .yelp-badge__rating-value {\n    font-size: var(--font-size-xl);\n  }\n\n  .yelp-badge--large .yelp-badge__star {\n    width: 20px;\n    height: 20px;\n  }\n\n  .yelp-badge--large .yelp-badge__review-count {\n    font-size: var(--font-size-base);\n  }\n\n  /* =================================================================\n   * VARIANT STYLES\n   * =================================================================\n   */\n\n  /* Compact - No border, minimal styling */\n  .yelp-badge--compact {\n    background: transparent;\n    border: none;\n    box-shadow: none;\n    padding: var(--spacing-2);\n  }\n\n  a.yelp-badge--compact:hover {\n    transform: none;\n    box-shadow: none;\n  }\n\n  /* Inline - Flows with text */\n  .yelp-badge--inline {\n    display: inline-flex;\n    background: transparent;\n    border: none;\n    box-shadow: none;\n    padding: 0;\n    gap: var(--spacing-2);\n    vertical-align: middle;\n  }\n\n  .yelp-badge--inline .yelp-badge__external-icon {\n    display: none;\n  }\n\n  a.yelp-badge--inline:hover {\n    transform: none;\n    box-shadow: none;\n  }\n\n  a.yelp-badge--inline:hover .yelp-badge__rating-value {\n    color: #FF1A1A;\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * =================================================================\n   */\n\n  @media (prefers-reduced-motion: reduce) {\n    .yelp-badge {\n      transition: none;\n    }\n\n    a.yelp-badge:hover {\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE\n   * =================================================================\n   */\n\n  :global(html[data-theme=\"dark\"]) .yelp-badge {\n    background: var(--color-background-elevated);\n  }\n\n  :global(html[data-theme=\"dark\"]) .yelp-badge--compact,\n  :global(html[data-theme=\"dark\"]) .yelp-badge--inline {\n    background: transparent;\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * =================================================================\n   */\n\n  @media print {\n    .yelp-badge {\n      box-shadow: none;\n      border: 1px solid var(--color-border);\n    }\n\n    .yelp-badge__external-icon {\n      display: none;\n    }\n  }\n</style>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for Yelp integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for Yelp integration"
    },
    {
      "content": "Create Yelp configuration file with sample data",
      "status": "completed",
      "activeForm": "Creating Yelp configuration file"
    },
    {
      "content": "Create YelpBadge component with Yelp branding",
      "status": "completed",
      "activeForm": "Creating YelpBadge component"
    },
    {
      "content": "Create YelpReviews component with highlights and link",
      "status": "in_progress",
      "activeForm": "Creating YelpReviews component"
    },
    {
      "content": "Add Yelp component to a page (about or index)",
      "status": "pending",
      "activeForm": "Adding Yelp component to page"
    },
    {
      "content": "Update .env.example with Yelp configuration",
      "status": "pending",
      "activeForm": "Updating .env.example"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\YelpReviews.astro",
  "content": "---\n/**\n * Yelp Reviews Component\n * Displays Yelp reviews, highlights, and a link to the full Yelp page.\n * Follows Yelp Brand Guidelines for proper attribution.\n *\n * Brand Guidelines: https://www.yelp.com/brand\n * - Always includes Yelp attribution\n * - Links back to Yelp page\n * - Shows authentic review content\n *\n * Features:\n * - Star rating display with aggregate rating\n * - Featured customer reviews with author info\n * - Review highlights section for impactful quotes\n * - Link to full Yelp page\n * - Review CTA with encouraging messaging\n * - Full JSON-LD review schema markup for SEO\n * - WCAG 2.1 AA compliant\n * - Mobile-first responsive design\n *\n * @example Basic usage\n * ```astro\n * <YelpReviews />\n * ```\n *\n * @example With custom options\n * ```astro\n * <YelpReviews\n *   heading=\"What Yelpers Say\"\n *   maxReviews={3}\n *   showHighlights={true}\n *   showReviewCTA={true}\n * />\n * ```\n */\n\nimport type { YelpReviewsProps } from '../types/yelp';\nimport {\n  yelpConfig,\n  generateYelpReviewSchemaItems,\n  formatPriceLevel,\n  YELP_COLORS,\n} from '../config/yelp.config';\nimport YelpBadge from './YelpBadge.astro';\n\ninterface Props extends YelpReviewsProps {}\n\nconst {\n  id = 'yelp-reviews',\n  heading = 'What Yelpers Are Saying',\n  subheading = `Rated ${yelpConfig.rating} stars by ${yelpConfig.totalReviews}+ reviewers on Yelp`,\n  class: className = '',\n  maxReviews = 4,\n  showHighlights = true,\n  maxHighlights = 4,\n  showReviewCTA = true,\n  showYelpLink = true,\n  variant = 'default',\n} = Astro.props;\n\n// Get data from config\nconst {\n  rating,\n  totalReviews,\n  featuredReviews,\n  reviewHighlights,\n  profileUrl,\n  reviewUrl,\n  businessName,\n  priceLevel,\n  categories,\n} = yelpConfig;\n\n// Limit reviews and highlights to display\nconst displayReviews = featuredReviews.slice(0, maxReviews);\nconst displayHighlights = reviewHighlights?.slice(0, maxHighlights) || [];\n\n// Calculate full and half stars\nconst fullStars = Math.floor(rating);\nconst hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;\nconst hasAlmostFullStar = rating % 1 >= 0.75;\nconst adjustedFullStars = fullStars + (hasAlmostFullStar ? 1 : 0);\nconst adjustedEmptyStars = 5 - adjustedFullStars - (hasHalfStar ? 1 : 0);\n\n// Generate review schema for JSON-LD\nconst reviewSchemaItems = generateYelpReviewSchemaItems();\n\n// Build CSS classes\nconst sectionClasses = [\n  'yelp-reviews',\n  `yelp-reviews--${variant}`,\n  className,\n].filter(Boolean).join(' ');\n\n// Star SVG icons (Yelp-style)\nconst starFull = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>`;\nconst starHalf = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\" fill-opacity=\"0.3\"/><path d=\"M12 17.27V2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z\"/></svg>`;\nconst starEmpty = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\" fill-opacity=\"0.3\"/></svg>`;\n\n// Yelp logo SVG\nconst yelpLogo = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n  <path fill=\"#FF1A1A\" d=\"M12.7 14.3c-.1-.1-.3-.2-.4-.1l-3.4 1.4c-.4.2-.4.7 0 .9l3.4 1.4c.2.1.4 0 .4-.2l.4-3.1c0-.1 0-.2-.1-.3h-.3zM9.3 14.8c-.1-.4-.5-.5-.8-.3l-2.8 2.1c-.3.2-.3.6.1.8l3.2 1.1c.2.1.4-.1.4-.3l-.1-3.4zM11.9 5.5c-.4-.1-.7.2-.7.5l-.2 4.8c0 .2.1.3.3.4l3.2.4c.2 0 .4-.1.4-.3l-2.5-5.6c-.1-.1-.3-.2-.5-.2zM8.8 12.3l-3.2-.9c-.4-.1-.7.2-.6.6l.9 3.2c.1.2.3.3.5.2l2.8-2.3c.2-.2.1-.5-.1-.6l-.3-.2zM15 9.5l2.3-2.4c.3-.3.2-.7-.2-.8l-3.3-.7c-.2 0-.4.1-.4.3l.6 3.4c0 .2.3.4.5.3l.5-.1z\"/>\n</svg>`;\n\n// Quote icon SVG\nconst quoteIcon = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z\"/></svg>`;\n---\n\n<section\n  class={sectionClasses}\n  id={id}\n  aria-labelledby={`${id}-heading`}\n  data-section=\"yelp-reviews\"\n>\n  <div class=\"yelp-reviews__container\">\n    <!-- Section Header -->\n    <header class=\"yelp-reviews__header section-heading--decorated\">\n      <h2 id={`${id}-heading`} class=\"yelp-reviews__heading\">\n        {heading}\n      </h2>\n      <p class=\"yelp-reviews__subheading\">\n        {subheading}\n      </p>\n    </header>\n\n    <!-- Rating Summary Card -->\n    <div class=\"yelp-reviews__summary\">\n      <div class=\"yelp-reviews__rating-card\">\n        <!-- Yelp Badge -->\n        <div class=\"yelp-reviews__yelp-badge\">\n          <span class=\"yelp-reviews__yelp-logo\" set:html={yelpLogo} />\n          <span class=\"yelp-reviews__yelp-text\">Yelp</span>\n        </div>\n\n        <!-- Rating Display -->\n        <div class=\"yelp-reviews__rating-display\">\n          <span class=\"yelp-reviews__rating-value\">{rating.toFixed(1)}</span>\n          <div class=\"yelp-reviews__stars\" role=\"img\" aria-label={`${rating} out of 5 stars`}>\n            {Array(adjustedFullStars).fill(null).map(() => (\n              <span class=\"yelp-reviews__star yelp-reviews__star--full\" set:html={starFull} />\n            ))}\n            {hasHalfStar && (\n              <span class=\"yelp-reviews__star yelp-reviews__star--half\" set:html={starHalf} />\n            )}\n            {Array(adjustedEmptyStars).fill(null).map(() => (\n              <span class=\"yelp-reviews__star yelp-reviews__star--empty\" set:html={starEmpty} />\n            ))}\n          </div>\n        </div>\n\n        <!-- Review Count -->\n        <p class=\"yelp-reviews__review-count\">\n          Based on <strong>{totalReviews.toLocaleString()}</strong> reviews\n        </p>\n\n        <!-- Price & Categories -->\n        {(priceLevel || categories) && (\n          <div class=\"yelp-reviews__meta\">\n            {priceLevel && (\n              <span class=\"yelp-reviews__price\">{formatPriceLevel(priceLevel)}</span>\n            )}\n            {priceLevel && categories && <span class=\"yelp-reviews__meta-sep\" aria-hidden=\"true\">•</span>}\n            {categories && (\n              <span class=\"yelp-reviews__categories\">{categories.slice(0, 2).join(', ')}</span>\n            )}\n          </div>\n        )}\n\n        <!-- View on Yelp Link -->\n        {showYelpLink && (\n          <a\n            href={profileUrl}\n            target=\"_blank\"\n            rel=\"noopener noreferrer\"\n            class=\"yelp-reviews__profile-link\"\n            aria-label={`View ${businessName} on Yelp (opens in new tab)`}\n            data-tracking=\"yelp-profile-click\"\n          >\n            View on Yelp\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\n              <path d=\"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"/>\n            </svg>\n          </a>\n        )}\n      </div>\n    </div>\n\n    <!-- Review Highlights Section -->\n    {showHighlights && displayHighlights.length > 0 && (\n      <div class=\"yelp-reviews__highlights\" aria-labelledby=\"yelp-highlights-heading\">\n        <h3 id=\"yelp-highlights-heading\" class=\"yelp-reviews__highlights-heading\">\n          Guest Favorites\n        </h3>\n        <div class=\"yelp-reviews__highlights-grid\" role=\"list\">\n          {displayHighlights.map((highlight, index) => (\n            <div\n              class=\"yelp-reviews__highlight reveal reveal--scale-up\"\n              style={`--reveal-delay: ${index * 100}ms`}\n              role=\"listitem\"\n            >\n              <span class=\"yelp-reviews__highlight-quote\" set:html={quoteIcon} />\n              <blockquote class=\"yelp-reviews__highlight-text\">\n                {highlight.excerpt}\n              </blockquote>\n              <cite class=\"yelp-reviews__highlight-author\">\n                — {highlight.authorName}\n              </cite>\n            </div>\n          ))}\n        </div>\n      </div>\n    )}\n\n    <!-- Featured Reviews Grid -->\n    <div class=\"yelp-reviews__reviews\" role=\"list\" aria-label=\"Customer reviews from Yelp\">\n      {displayReviews.map((review, index) => (\n        <article\n          class=\"yelp-reviews__review reveal reveal--up\"\n          style={`--reveal-delay: ${index * 100}ms`}\n          role=\"listitem\"\n        >\n          <header class=\"yelp-reviews__review-header\">\n            <div class=\"yelp-reviews__reviewer\">\n              <div class=\"yelp-reviews__reviewer-avatar\" aria-hidden=\"true\">\n                {review.authorName.charAt(0).toUpperCase()}\n              </div>\n              <div class=\"yelp-reviews__reviewer-info\">\n                <span class=\"yelp-reviews__reviewer-name\">{review.authorName}</span>\n                <span class=\"yelp-reviews__review-date\">{review.relativeTimeDescription}</span>\n              </div>\n            </div>\n            <div class=\"yelp-reviews__review-rating\" role=\"img\" aria-label={`${review.rating} out of 5 stars`}>\n              {Array(review.rating).fill(null).map(() => (\n                <span class=\"yelp-reviews__star yelp-reviews__star--small\" set:html={starFull} />\n              ))}\n            </div>\n          </header>\n          <blockquote class=\"yelp-reviews__review-text\">\n            <p>\"{review.text}\"</p>\n          </blockquote>\n          {review.reviewUrl && (\n            <a\n              href={review.reviewUrl}\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              class=\"yelp-reviews__review-link\"\n              aria-label={`Read full review by ${review.authorName} on Yelp (opens in new tab)`}\n            >\n              Read on Yelp\n            </a>\n          )}\n        </article>\n      ))}\n    </div>\n\n    <!-- Review CTA Section -->\n    {showReviewCTA && (\n      <div class=\"yelp-reviews__cta\">\n        <div class=\"yelp-reviews__cta-content\">\n          <h3 class=\"yelp-reviews__cta-heading\">Enjoyed Your Visit?</h3>\n          <p class=\"yelp-reviews__cta-text\">\n            We'd love to hear about your experience! Your review helps other food lovers discover us.\n          </p>\n          <a\n            href={reviewUrl}\n            target=\"_blank\"\n            rel=\"noopener noreferrer\"\n            class=\"yelp-reviews__cta-button\"\n            data-tracking=\"yelp-review-cta-click\"\n            aria-label=\"Leave a review on Yelp (opens in new tab)\"\n          >\n            <span class=\"yelp-reviews__cta-button-logo\" set:html={yelpLogo} />\n            Write a Review on Yelp\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\" class=\"yelp-reviews__cta-button-icon\">\n              <path d=\"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"/>\n            </svg>\n          </a>\n        </div>\n      </div>\n    )}\n\n    <!-- Yelp Attribution -->\n    <footer class=\"yelp-reviews__attribution\">\n      <p>\n        Reviews and ratings from\n        <a href={profileUrl} target=\"_blank\" rel=\"noopener noreferrer\">\n          <span class=\"yelp-reviews__attribution-logo\" set:html={yelpLogo} />\n          Yelp\n        </a>\n      </p>\n    </footer>\n  </div>\n</section>\n\n<!-- JSON-LD Review Schema for SEO -->\n<script type=\"application/ld+json\" set:html={JSON.stringify({\n  '@context': 'https://schema.org',\n  '@type': 'Restaurant',\n  name: businessName,\n  aggregateRating: {\n    '@type': 'AggregateRating',\n    ratingValue: rating,\n    bestRating: 5,\n    worstRating: 1,\n    ratingCount: totalReviews,\n    reviewCount: totalReviews,\n  },\n  review: reviewSchemaItems,\n})} />\n\n<style>\n  /* =================================================================\n   * YELP REVIEWS COMPONENT STYLES\n   * =================================================================\n   * Mobile-first responsive design with BEM naming convention\n   * Uses official Yelp Red (#FF1A1A) per brand guidelines\n   */\n\n  .yelp-reviews {\n    padding: var(--spacing-16) var(--spacing-4);\n    background-color: var(--color-background);\n  }\n\n  .yelp-reviews__container {\n    max-width: var(--container-6xl);\n    margin: 0 auto;\n  }\n\n  /* =================================================================\n   * HEADER STYLES\n   * =================================================================\n   */\n\n  .yelp-reviews__header {\n    text-align: center;\n    margin-bottom: var(--spacing-10);\n  }\n\n  .yelp-reviews__heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-3xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-3) 0;\n  }\n\n  .yelp-reviews__subheading {\n    font-family: var(--font-body);\n    font-size: var(--font-size-md);\n    color: var(--color-text-secondary);\n    margin: 0;\n    max-width: 50ch;\n    margin-inline: auto;\n  }\n\n  /* =================================================================\n   * RATING SUMMARY CARD\n   * =================================================================\n   */\n\n  .yelp-reviews__summary {\n    display: flex;\n    justify-content: center;\n    margin-bottom: var(--spacing-10);\n  }\n\n  .yelp-reviews__rating-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: var(--spacing-6);\n    background: var(--color-background-subtle);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-2xl);\n    box-shadow: var(--shadow-md);\n    text-align: center;\n    max-width: 320px;\n    width: 100%;\n  }\n\n  .yelp-reviews__yelp-badge {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    margin-bottom: var(--spacing-4);\n    padding: var(--spacing-2) var(--spacing-4);\n    background: var(--color-background);\n    border-radius: var(--radius-full);\n    border: 1px solid var(--color-border);\n  }\n\n  .yelp-reviews__yelp-logo {\n    display: flex;\n    width: 20px;\n    height: 20px;\n  }\n\n  .yelp-reviews__yelp-logo :global(svg) {\n    width: 100%;\n    height: 100%;\n  }\n\n  .yelp-reviews__yelp-text {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-bold);\n    color: #FF1A1A;\n  }\n\n  .yelp-reviews__rating-display {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--spacing-2);\n    margin-bottom: var(--spacing-3);\n  }\n\n  .yelp-reviews__rating-value {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-5xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    line-height: 1;\n  }\n\n  .yelp-reviews__stars {\n    display: flex;\n    gap: var(--spacing-1);\n  }\n\n  .yelp-reviews__star {\n    display: flex;\n    width: 24px;\n    height: 24px;\n    color: #FF1A1A; /* Yelp Red */\n  }\n\n  .yelp-reviews__star :global(svg) {\n    width: 100%;\n    height: 100%;\n  }\n\n  .yelp-reviews__star--small {\n    width: 16px;\n    height: 16px;\n  }\n\n  .yelp-reviews__review-count {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    margin: 0 0 var(--spacing-2) 0;\n  }\n\n  .yelp-reviews__meta {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-tertiary);\n    margin-bottom: var(--spacing-4);\n  }\n\n  .yelp-reviews__price {\n    color: var(--color-text-secondary);\n    font-weight: var(--font-weight-medium);\n  }\n\n  .yelp-reviews__profile-link {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-1);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n    color: #D32323;\n    text-decoration: none;\n    transition: color var(--duration-150) var(--ease-in-out);\n  }\n\n  .yelp-reviews__profile-link:hover {\n    color: #FF1A1A;\n    text-decoration: underline;\n  }\n\n  .yelp-reviews__profile-link svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  /* =================================================================\n   * HIGHLIGHTS SECTION\n   * =================================================================\n   */\n\n  .yelp-reviews__highlights {\n    margin-bottom: var(--spacing-10);\n  }\n\n  .yelp-reviews__highlights-heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    text-align: center;\n    margin: 0 0 var(--spacing-6) 0;\n  }\n\n  .yelp-reviews__highlights-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: var(--spacing-4);\n  }\n\n  .yelp-reviews__highlight {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: var(--spacing-5);\n    background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-subtle) 100%);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-xl);\n    text-align: center;\n    position: relative;\n  }\n\n  .yelp-reviews__highlight-quote {\n    position: absolute;\n    top: var(--spacing-2);\n    left: var(--spacing-3);\n    width: 24px;\n    height: 24px;\n    color: #FF1A1A;\n    opacity: 0.2;\n  }\n\n  .yelp-reviews__highlight-quote :global(svg) {\n    width: 100%;\n    height: 100%;\n  }\n\n  .yelp-reviews__highlight-text {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    font-style: italic;\n    margin: 0 0 var(--spacing-2) 0;\n    border: none;\n    padding: 0;\n  }\n\n  .yelp-reviews__highlight-author {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-style: normal;\n    color: var(--color-text-tertiary);\n  }\n\n  /* =================================================================\n   * REVIEWS GRID\n   * =================================================================\n   */\n\n  .yelp-reviews__reviews {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-6);\n    margin-bottom: var(--spacing-10);\n  }\n\n  .yelp-reviews__review {\n    padding: var(--spacing-6);\n    background: var(--color-background);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-xl);\n    box-shadow: var(--shadow-sm);\n    transition:\n      transform var(--duration-300) var(--ease-out),\n      box-shadow var(--duration-300) var(--ease-out);\n    transition-delay: var(--reveal-delay, 0ms);\n  }\n\n  .yelp-reviews__review:hover {\n    transform: translateY(-2px);\n    box-shadow: var(--shadow-md);\n  }\n\n  .yelp-reviews__review-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-bottom: var(--spacing-4);\n    gap: var(--spacing-3);\n  }\n\n  .yelp-reviews__reviewer {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-3);\n  }\n\n  .yelp-reviews__reviewer-avatar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    background: linear-gradient(135deg, #FF1A1A 0%, #D32323 100%);\n    color: var(--color-text-inverse);\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-bold);\n    border-radius: var(--radius-full);\n    flex-shrink: 0;\n  }\n\n  .yelp-reviews__reviewer-info {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-0-5);\n  }\n\n  .yelp-reviews__reviewer-name {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n  }\n\n  .yelp-reviews__review-date {\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    color: var(--color-text-tertiary);\n  }\n\n  .yelp-reviews__review-rating {\n    display: flex;\n    gap: 2px;\n    flex-shrink: 0;\n  }\n\n  .yelp-reviews__review-text {\n    margin: 0;\n    border: none;\n    padding: 0;\n  }\n\n  .yelp-reviews__review-text p {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    line-height: var(--line-height-relaxed);\n    color: var(--color-text-secondary);\n    font-style: italic;\n    margin: 0;\n  }\n\n  .yelp-reviews__review-link {\n    display: inline-block;\n    margin-top: var(--spacing-3);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n    color: #D32323;\n    text-decoration: none;\n    transition: color var(--duration-150) var(--ease-in-out);\n  }\n\n  .yelp-reviews__review-link:hover {\n    color: #FF1A1A;\n    text-decoration: underline;\n  }\n\n  /* =================================================================\n   * CTA SECTION\n   * =================================================================\n   */\n\n  .yelp-reviews__cta {\n    margin-bottom: var(--spacing-8);\n  }\n\n  .yelp-reviews__cta-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: var(--spacing-8);\n    background: linear-gradient(135deg, var(--color-background-subtle) 0%, var(--color-background-muted) 100%);\n    border-radius: var(--radius-2xl);\n    text-align: center;\n  }\n\n  .yelp-reviews__cta-heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-2) 0;\n  }\n\n  .yelp-reviews__cta-text {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    margin: 0 0 var(--spacing-6) 0;\n    max-width: 40ch;\n  }\n\n  .yelp-reviews__cta-button {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    padding: var(--spacing-3) var(--spacing-6);\n    background: #D32323;\n    color: white;\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    font-weight: var(--font-weight-semibold);\n    text-decoration: none;\n    border-radius: var(--radius-lg);\n    transition:\n      background-color var(--duration-150) var(--ease-out),\n      transform var(--duration-150) var(--ease-out);\n  }\n\n  .yelp-reviews__cta-button:hover {\n    background: #FF1A1A;\n    transform: translateY(-1px);\n  }\n\n  .yelp-reviews__cta-button:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: 2px;\n  }\n\n  .yelp-reviews__cta-button-logo {\n    display: flex;\n    width: 20px;\n    height: 20px;\n  }\n\n  .yelp-reviews__cta-button-logo :global(svg path) {\n    fill: white;\n  }\n\n  .yelp-reviews__cta-button-icon {\n    width: 16px;\n    height: 16px;\n    opacity: 0.8;\n  }\n\n  /* =================================================================\n   * ATTRIBUTION FOOTER\n   * =================================================================\n   */\n\n  .yelp-reviews__attribution {\n    text-align: center;\n    padding-top: var(--spacing-4);\n    border-top: 1px solid var(--color-border);\n  }\n\n  .yelp-reviews__attribution p {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-2);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-tertiary);\n    margin: 0;\n  }\n\n  .yelp-reviews__attribution a {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-1);\n    color: #D32323;\n    text-decoration: none;\n    font-weight: var(--font-weight-medium);\n  }\n\n  .yelp-reviews__attribution a:hover {\n    color: #FF1A1A;\n    text-decoration: underline;\n  }\n\n  .yelp-reviews__attribution-logo {\n    display: flex;\n    width: 16px;\n    height: 16px;\n  }\n\n  .yelp-reviews__attribution-logo :global(svg) {\n    width: 100%;\n    height: 100%;\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES - Tablet (640px+)\n   * =================================================================\n   */\n\n  @media screen and (min-width: 640px) {\n    .yelp-reviews {\n      padding: var(--spacing-20) var(--spacing-6);\n    }\n\n    .yelp-reviews__heading {\n      font-size: var(--font-size-4xl);\n    }\n\n    .yelp-reviews__reviews {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .yelp-reviews__highlights-grid {\n      grid-template-columns: repeat(4, 1fr);\n    }\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES - Desktop (1024px+)\n   * =================================================================\n   */\n\n  @media screen and (min-width: 1024px) {\n    .yelp-reviews {\n      padding: var(--spacing-24) var(--spacing-8);\n    }\n\n    .yelp-reviews__header {\n      margin-bottom: var(--spacing-12);\n    }\n\n    .yelp-reviews__heading {\n      font-size: var(--font-size-5xl);\n    }\n\n    .yelp-reviews__subheading {\n      font-size: var(--font-size-lg);\n    }\n\n    .yelp-reviews__summary {\n      margin-bottom: var(--spacing-12);\n    }\n\n    .yelp-reviews__rating-card {\n      padding: var(--spacing-8);\n      max-width: 380px;\n    }\n\n    .yelp-reviews__star {\n      width: 28px;\n      height: 28px;\n    }\n\n    .yelp-reviews__reviews {\n      grid-template-columns: repeat(2, 1fr);\n      gap: var(--spacing-8);\n      margin-bottom: var(--spacing-12);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * =================================================================\n   */\n\n  @media (prefers-reduced-motion: reduce) {\n    .yelp-reviews__review {\n      transition: none;\n    }\n\n    .yelp-reviews__review:hover {\n      transform: none;\n    }\n\n    .yelp-reviews__cta-button:hover {\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE ADJUSTMENTS\n   * =================================================================\n   */\n\n  :global(html[data-theme=\"dark\"]) .yelp-reviews__rating-card {\n    background: var(--color-background-elevated);\n  }\n\n  :global(html[data-theme=\"dark\"]) .yelp-reviews__review {\n    background: var(--color-background-elevated);\n  }\n\n  :global(html[data-theme=\"dark\"]) .yelp-reviews__highlight {\n    background: linear-gradient(135deg, var(--color-background-elevated) 0%, var(--color-background-muted) 100%);\n  }\n\n  :global(html[data-theme=\"dark\"]) .yelp-reviews__cta-content {\n    background: linear-gradient(135deg, var(--color-background-elevated) 0%, var(--color-background-muted) 100%);\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * =================================================================\n   */\n\n  @media print {\n    .yelp-reviews {\n      padding: var(--spacing-8) 0;\n      background: transparent;\n    }\n\n    .yelp-reviews__rating-card {\n      box-shadow: none;\n      border: 1px solid var(--color-border);\n    }\n\n    .yelp-reviews__review {\n      box-shadow: none;\n      page-break-inside: avoid;\n    }\n\n    .yelp-reviews__cta {\n      display: none;\n    }\n  }\n</style>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for Yelp integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for Yelp integration"
    },
    {
      "content": "Create Yelp configuration file with sample data",
      "status": "completed",
      "activeForm": "Creating Yelp configuration file"
    },
    {
      "content": "Create YelpBadge component with Yelp branding",
      "status": "completed",
      "activeForm": "Creating YelpBadge component"
    },
    {
      "content": "Create YelpReviews component with highlights and link",
      "status": "completed",
      "activeForm": "Creating YelpReviews component"
    },
    {
      "content": "Add Yelp component to a page (about or index)",
      "status": "in_progress",
      "activeForm": "Adding Yelp component to page"
    },
    {
      "content": "Update .env.example with Yelp configuration",
      "status": "pending",
      "activeForm": "Updating .env.example"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}
Now let me add the YelpReviews component to the about page, following the existing pattern of how GoogleBusinessProfile might be used:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\about.astro"
}
Now let me add the YelpReviews component to the about page. I'll add it after the Team section and before the Sourcing Philosophy section, which is a natural place for social proof:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\about.astro",
  "old_string": "import Layout from '../layouts/Layout.astro';\nimport Button from '../components/Button.astro';\nimport TeamBios from '../components/TeamBios.astro';\nimport SourcingPhilosophy from '../components/SourcingPhilosophy.astro';\nimport PartnershipShowcase from '../components/PartnershipShowcase.astro';\nimport RestaurantTimeline from '../components/RestaurantTimeline.astro';",
  "new_string": "import Layout from '../layouts/Layout.astro';\nimport Button from '../components/Button.astro';\nimport TeamBios from '../components/TeamBios.astro';\nimport SourcingPhilosophy from '../components/SourcingPhilosophy.astro';\nimport PartnershipShowcase from '../components/PartnershipShowcase.astro';\nimport RestaurantTimeline from '../components/RestaurantTimeline.astro';\nimport YelpReviews from '../components/YelpReviews.astro';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\about.astro",
  "old_string": "    <!-- Team Bios Section -->\n    <TeamBios\n      members={TEAM_MEMBERS}\n      heading=\"Meet Our Team\"\n      subheading=\"The passionate individuals who bring our vision to life every day.\"\n      foundersFirst={true}\n    />\n\n    <!-- Sourcing Philosophy Section -->",
  "new_string": "    <!-- Team Bios Section -->\n    <TeamBios\n      members={TEAM_MEMBERS}\n      heading=\"Meet Our Team\"\n      subheading=\"The passionate individuals who bring our vision to life every day.\"\n      foundersFirst={true}\n    />\n\n    <!-- Yelp Reviews Section -->\n    <YelpReviews\n      heading=\"What Yelpers Are Saying\"\n      maxReviews={4}\n      showHighlights={true}\n      maxHighlights={4}\n      showReviewCTA={true}\n      showYelpLink={true}\n    />\n\n    <!-- Sourcing Philosophy Section -->"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for Yelp integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for Yelp integration"
    },
    {
      "content": "Create Yelp configuration file with sample data",
      "status": "completed",
      "activeForm": "Creating Yelp configuration file"
    },
    {
      "content": "Create YelpBadge component with Yelp branding",
      "status": "completed",
      "activeForm": "Creating YelpBadge component"
    },
    {
      "content": "Create YelpReviews component with highlights and link",
      "status": "completed",
      "activeForm": "Creating YelpReviews component"
    },
    {
      "content": "Add Yelp component to a page (about or index)",
      "status": "completed",
      "activeForm": "Adding Yelp component to page"
    },
    {
      "content": "Update .env.example with Yelp configuration",
      "status": "in_progress",
      "activeForm": "Updating .env.example"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\.env.example"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\.env.example",
  "old_string": "# -----------------------------------------------------------------\n# Yelp Reservations Integration\n# -----------------------------------------------------------------\n# Your restaurant's Yelp Reservations page URL\n# PUBLIC_YELP_RESERVATIONS_URL=https://www.yelp.com/reservations/your-restaurant\n\n# Yelp Business ID (for API availability checks)\n# PUBLIC_YELP_BUSINESS_ID=your-yelp-business-id\n\n# Enable real-time availability checking (requires API access)\n# PUBLIC_YELP_API_ENABLED=false",
  "new_string": "# -----------------------------------------------------------------\n# Yelp Reservations Integration\n# -----------------------------------------------------------------\n# Your restaurant's Yelp Reservations page URL\n# PUBLIC_YELP_RESERVATIONS_URL=https://www.yelp.com/reservations/your-restaurant\n\n# Yelp Business ID (for API availability checks)\n# PUBLIC_YELP_BUSINESS_ID=your-yelp-business-id\n\n# Enable real-time availability checking (requires API access)\n# PUBLIC_YELP_API_ENABLED=false\n\n# =================================================================\n# YELP REVIEWS INTEGRATION\n# =================================================================\n# Configuration for Yelp reviews display and badge components.\n# Follows Yelp Brand Guidelines: https://www.yelp.com/brand\n#\n# Note: Review data is manually curated in src/config/yelp.config.ts\n# Update the config file with your restaurant's actual Yelp data.\n\n# -----------------------------------------------------------------\n# Yelp Business Profile\n# -----------------------------------------------------------------\n# Your Yelp business page URL\n# PUBLIC_YELP_PROFILE_URL=https://www.yelp.com/biz/your-restaurant-city\n\n# URL for customers to write reviews\n# PUBLIC_YELP_REVIEW_URL=https://www.yelp.com/writeareview/biz/your-restaurant-city\n\n# Enable Yelp reviews section display (default: true)\n# PUBLIC_YELP_REVIEWS_ENABLED=true"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for Yelp integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for Yelp integration"
    },
    {
      "content": "Create Yelp configuration file with sample data",
      "status": "completed",
      "activeForm": "Creating Yelp configuration file"
    },
    {
      "content": "Create YelpBadge component with Yelp branding",
      "status": "completed",
      "activeForm": "Creating YelpBadge component"
    },
    {
      "content": "Create YelpReviews component with highlights and link",
      "status": "completed",
      "activeForm": "Creating YelpReviews component"
    },
    {
      "content": "Add Yelp component to a page (about or index)",
      "status": "completed",
      "activeForm": "Adding Yelp component to page"
    },
    {
      "content": "Update .env.example with Yelp configuration",
      "status": "completed",
      "activeForm": "Updating .env.example"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "in_progress",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}
Now let me check if Playwright is set up in this project and create a verification test:

🔧 Tool: Glob
Input: {
  "pattern": "**/playwright.config.*",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\playwright.config.ts"
}
Now let me create a temporary Playwright test to verify the Yelp integration:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\yelp-integration-verification.spec.ts",
  "content": "/**\n * Temporary Verification Test for Yelp Integration\n * This test verifies that the Yelp integration feature works correctly.\n * DELETE THIS FILE after verification is complete.\n */\n\nimport { test, expect } from '@playwright/test';\n\ntest.describe('Yelp Integration Feature', () => {\n  test.beforeEach(async ({ page }) => {\n    // Navigate to the about page where Yelp reviews are displayed\n    await page.goto('/about');\n  });\n\n  test('Yelp reviews section is visible on the about page', async ({ page }) => {\n    // Check that the Yelp reviews section exists\n    const yelpSection = page.locator('[data-section=\"yelp-reviews\"]');\n    await expect(yelpSection).toBeVisible();\n  });\n\n  test('Yelp reviews section has correct heading', async ({ page }) => {\n    // Check for the section heading\n    const heading = page.locator('#yelp-reviews-heading');\n    await expect(heading).toBeVisible();\n    await expect(heading).toContainText('What Yelpers Are Saying');\n  });\n\n  test('Yelp rating card displays rating and review count', async ({ page }) => {\n    // Check that rating value is displayed\n    const ratingValue = page.locator('.yelp-reviews__rating-value');\n    await expect(ratingValue).toBeVisible();\n    await expect(ratingValue).toContainText('4.5');\n\n    // Check that review count is displayed\n    const reviewCount = page.locator('.yelp-reviews__review-count');\n    await expect(reviewCount).toBeVisible();\n    await expect(reviewCount).toContainText('287');\n  });\n\n  test('Yelp badge with logo is displayed', async ({ page }) => {\n    // Check that the Yelp badge exists\n    const yelpBadge = page.locator('.yelp-reviews__yelp-badge');\n    await expect(yelpBadge).toBeVisible();\n\n    // Check that \"Yelp\" text is present\n    const yelpText = page.locator('.yelp-reviews__yelp-text');\n    await expect(yelpText).toContainText('Yelp');\n  });\n\n  test('Star rating display shows correct number of stars', async ({ page }) => {\n    // Check that stars are displayed (4.5 rating = 4 full + 1 half star)\n    const stars = page.locator('.yelp-reviews__summary .yelp-reviews__stars');\n    await expect(stars).toBeVisible();\n\n    // Verify stars have the correct aria-label\n    await expect(stars).toHaveAttribute('aria-label', '4.5 out of 5 stars');\n  });\n\n  test('Featured reviews are displayed', async ({ page }) => {\n    // Check that review cards exist\n    const reviews = page.locator('.yelp-reviews__review');\n    await expect(reviews).toHaveCount(4); // maxReviews={4}\n\n    // Check first review has expected content\n    const firstReview = reviews.first();\n    await expect(firstReview).toBeVisible();\n\n    // Verify review text is visible\n    const reviewText = firstReview.locator('.yelp-reviews__review-text');\n    await expect(reviewText).toBeVisible();\n  });\n\n  test('Review highlights section is displayed', async ({ page }) => {\n    // Check that highlights section exists\n    const highlightsSection = page.locator('.yelp-reviews__highlights');\n    await expect(highlightsSection).toBeVisible();\n\n    // Check heading\n    const highlightsHeading = page.locator('#yelp-highlights-heading');\n    await expect(highlightsHeading).toContainText('Guest Favorites');\n\n    // Check that highlight cards exist\n    const highlights = page.locator('.yelp-reviews__highlight');\n    await expect(highlights).toHaveCount(4); // maxHighlights={4}\n  });\n\n  test('View on Yelp link has correct URL and opens in new tab', async ({ page }) => {\n    const yelpLink = page.locator('.yelp-reviews__profile-link');\n    await expect(yelpLink).toBeVisible();\n    await expect(yelpLink).toContainText('View on Yelp');\n\n    // Check that link has correct href\n    await expect(yelpLink).toHaveAttribute('href', 'https://www.yelp.com/biz/main-street-bistro-houston');\n\n    // Check that link opens in new tab\n    await expect(yelpLink).toHaveAttribute('target', '_blank');\n    await expect(yelpLink).toHaveAttribute('rel', 'noopener noreferrer');\n  });\n\n  test('Write a Review CTA button is displayed with correct URL', async ({ page }) => {\n    const ctaButton = page.locator('.yelp-reviews__cta-button');\n    await expect(ctaButton).toBeVisible();\n    await expect(ctaButton).toContainText('Write a Review on Yelp');\n\n    // Check that CTA has correct href\n    await expect(ctaButton).toHaveAttribute('href', 'https://www.yelp.com/writeareview/biz/main-street-bistro-houston');\n\n    // Check that CTA opens in new tab\n    await expect(ctaButton).toHaveAttribute('target', '_blank');\n  });\n\n  test('Yelp attribution footer is displayed', async ({ page }) => {\n    const attribution = page.locator('.yelp-reviews__attribution');\n    await expect(attribution).toBeVisible();\n    await expect(attribution).toContainText('Reviews and ratings from');\n    await expect(attribution).toContainText('Yelp');\n  });\n\n  test('Review cards have proper accessibility attributes', async ({ page }) => {\n    // Check that reviews container has proper role\n    const reviewsList = page.locator('.yelp-reviews__reviews[role=\"list\"]');\n    await expect(reviewsList).toBeVisible();\n    await expect(reviewsList).toHaveAttribute('aria-label', 'Customer reviews from Yelp');\n\n    // Check that individual reviews have listitem role\n    const reviewItem = page.locator('.yelp-reviews__review[role=\"listitem\"]').first();\n    await expect(reviewItem).toBeVisible();\n  });\n\n  test('JSON-LD schema is present for SEO', async ({ page }) => {\n    // Check that JSON-LD script exists with restaurant schema\n    const jsonLdScript = page.locator('script[type=\"application/ld+json\"]');\n\n    // Get the script content\n    const scriptContent = await page.evaluate(() => {\n      const scripts = document.querySelectorAll('script[type=\"application/ld+json\"]');\n      for (const script of scripts) {\n        const content = script.textContent;\n        if (content && content.includes('aggregateRating')) {\n          return content;\n        }\n      }\n      return null;\n    });\n\n    expect(scriptContent).not.toBeNull();\n    expect(scriptContent).toContain('aggregateRating');\n    expect(scriptContent).toContain('Restaurant');\n  });\n\n  test('Category and price level meta information is displayed', async ({ page }) => {\n    // Check price level\n    const priceLevel = page.locator('.yelp-reviews__price');\n    await expect(priceLevel).toBeVisible();\n    await expect(priceLevel).toContainText('$$$'); // priceLevel: 3\n\n    // Check categories\n    const categories = page.locator('.yelp-reviews__categories');\n    await expect(categories).toBeVisible();\n  });\n});\n"
}
Now let me run the Playwright test to verify the implementation:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx playwright test yelp-integration-verification.spec.ts --reporter=list",
  "description": "Run Playwright verification test",
  "timeout": 300000
}
All 13 tests passed. Now let me delete the temporary test file as instructed:

🔧 Tool: Bash
Input: {
  "command": "rm \"C:\\Users\\James\\Repos\\restaurant-business\\yelp-integration-verification.spec.ts\"",
  "description": "Delete temporary Playwright test file"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for Yelp integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for Yelp integration"
    },
    {
      "content": "Create Yelp configuration file with sample data",
      "status": "completed",
      "activeForm": "Creating Yelp configuration file"
    },
    {
      "content": "Create YelpBadge component with Yelp branding",
      "status": "completed",
      "activeForm": "Creating YelpBadge component"
    },
    {
      "content": "Create YelpReviews component with highlights and link",
      "status": "completed",
      "activeForm": "Creating YelpReviews component"
    },
    {
      "content": "Add Yelp component to a page (about or index)",
      "status": "completed",
      "activeForm": "Adding Yelp component to page"
    },
    {
      "content": "Update .env.example with Yelp configuration",
      "status": "completed",
      "activeForm": "Updating .env.example"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "completed",
      "activeForm": "Verifying with Playwright test"
    }
  ]
}
<summary>
## Summary: Add Yelp badge, review highlights, and link to full Yelp page

### Changes Implemented
- Created TypeScript type definitions for Yelp integration (`YelpReview`, `YelpReviewHighlight`, `YelpConfig`, `YelpBadgeProps`, `YelpReviewsProps`, `YelpReviewSchema`)
- Created comprehensive Yelp configuration file with sample data, Yelp brand colors, and schema generation helper functions
- Created `YelpBadge` component with multiple size variants (small, medium, large), style variants (default, compact, inline), star ratings, and link to Yelp profile
- Created `YelpReviews` component featuring:
  - Rating summary card with Yelp logo and badge
  - Star rating display with proper accessibility (ARIA labels)
  - Review count and price level display
  - Review highlights section ("Guest Favorites") with short impactful quotes
  - Featured customer reviews grid with author info and full review text
  - "Write a Review on Yelp" CTA button with Yelp branding
  - View on Yelp link with proper attribution
  - JSON-LD schema markup for SEO
  - Full responsive design (mobile-first)
  - Dark mode support
  - Reduced motion support
  - Print styles
- Integrated YelpReviews component into the About page
- Updated `.env.example` with Yelp configuration variables and documentation

### Files Modified
- `src/types/yelp.ts` (new file)
- `src/config/yelp.config.ts` (new file)
- `src/components/YelpBadge.astro` (new file)
- `src/components/YelpReviews.astro` (new file)
- `src/pages/about.astro` (modified - added YelpReviews import and component)
- `.env.example` (modified - added Yelp Reviews configuration section)

### Notes for Developer
- The implementation follows Yelp Brand Guidelines (https://www.yelp.com/brand) with proper attribution and official Yelp Red color (#FF1A1A)
- Review data is configured in `src/config/yelp.config.ts` - update with actual business data
- The YelpBadge component can be used independently anywhere in the site for a compact Yelp rating display
- All components include WCAG 2.1 AA accessibility features (ARIA labels, semantic HTML, keyboard navigation)
- JSON-LD structured data is included for rich search result snippets
- The design follows existing codebase patterns (BEM naming, CSS custom properties, mobile-first responsive design)

### Verification Status
- Created comprehensive Playwright test suite with 13 test cases covering:
  - Section visibility and heading
  - Rating card with rating value and review count
  - Yelp badge with logo display
  - Star rating accessibility
  - Featured reviews display (4 reviews)
  - Review highlights section (4 highlights)
  - View on Yelp link URL and accessibility
  - Write a Review CTA button
  - Attribution footer
  - ARIA accessibility attributes
  - JSON-LD schema for SEO
  - Price level and categories display
- **All 13 tests passed** successfully
- Test file deleted after verification as instructed
</summary>