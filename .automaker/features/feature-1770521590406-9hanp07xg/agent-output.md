
🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase to find the homepage and 'Reserve Your Table' button",
      "status": "in_progress",
      "activeForm": "Exploring codebase to find the homepage and button"
    }
  ]
}
Let me explore the codebase to understand the structure and find the "Reserve Your Table" button.

🔧 Tool: Glob
Input: {
  "pattern": "**/*.{tsx,jsx,html,css}"
}

🔧 Tool: Grep
Input: {
  "pattern": "reserve.*table|Reserve.*Table",
  "-i": true
}
Let me look at the relevant source files to find the button styling:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ContactCTA.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css"
}
Now I need to find the RestaurantHeroSection component which contains the "Reserve Your Table" button on the homepage:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro"
}
Now I understand the issue. The "Reserve Your Table" button in the hero section is styled with `--color-burgundy` (a maroon/burgundy color), which doesn't match the blue-and-white theme used throughout the rest of the site.

Let me update the todo list and implement the fix:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase to find the homepage and 'Reserve Your Table' button",
      "status": "completed",
      "activeForm": "Exploring codebase to find the homepage and button"
    },
    {
      "content": "Update the hero CTA button color from burgundy to blue theme",
      "status": "in_progress",
      "activeForm": "Updating the hero CTA button color to match the blue theme"
    }
  ]
}
Based on my exploration, the issue is in the `RestaurantHeroSection.astro` component. The primary CTA button is styled with `--color-burgundy` (maroon/reddish color), but the site's theme is blues and whites. I need to update the button styling to use the primary blue color from the design system.

Looking at the variables.css, the primary color palette is blue-based:
- `--color-primary-500: #365395` (base primary blue)
- `--color-primary-600: #304b8d` (hover blue)

I'll update the RestaurantHeroSection.astro to use the primary blue colors instead of burgundy:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "old_string": "  /* Primary CTA - Warm burgundy fill */\n  .restaurant-hero__cta-group :global(.restaurant-hero__cta--primary) {\n    background-color: var(--color-burgundy, #722f37) !important;\n    border-color: var(--color-burgundy, #722f37) !important;\n    color: var(--color-cream, #fffbeb) !important;\n    box-shadow: var(--shadow-lg), var(--glow-primary-sm);\n  }\n\n  .restaurant-hero__cta-group :global(.restaurant-hero__cta--primary:hover) {\n    background-color: var(--color-burgundy-light, #8b3a44) !important;\n    border-color: var(--color-burgundy-light, #8b3a44) !important;\n    box-shadow: var(--shadow-xl), var(--glow-primary-md);\n    transform: translateY(-2px);\n  }",
  "new_string": "  /* Primary CTA - Blue fill matching site theme */\n  .restaurant-hero__cta-group :global(.restaurant-hero__cta--primary) {\n    background-color: var(--color-primary-500, #365395) !important;\n    border-color: var(--color-primary-500, #365395) !important;\n    color: var(--color-text-inverse, #ffffff) !important;\n    box-shadow: var(--shadow-lg), var(--glow-primary-sm);\n  }\n\n  .restaurant-hero__cta-group :global(.restaurant-hero__cta--primary:hover) {\n    background-color: var(--color-primary-600, #304b8d) !important;\n    border-color: var(--color-primary-600, #304b8d) !important;\n    box-shadow: var(--shadow-xl), var(--glow-primary-md);\n    transform: translateY(-2px);\n  }"
}
Now I also need to update the dark mode styles for the primary CTA:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "old_string": "  :global(html[data-theme=\"dark\"]) .restaurant-hero__cta-group :global(.restaurant-hero__cta--primary) {\n    background-color: var(--color-burgundy, #722f37) !important;\n  }\n\n  :global(html[data-theme=\"dark\"]) .restaurant-hero__cta-group :global(.restaurant-hero__cta--primary:hover) {\n    background-color: var(--color-burgundy-light, #8b3a44) !important;\n  }",
  "new_string": "  :global(html[data-theme=\"dark\"]) .restaurant-hero__cta-group :global(.restaurant-hero__cta--primary) {\n    background-color: var(--color-primary-500, #365395) !important;\n  }\n\n  :global(html[data-theme=\"dark\"]) .restaurant-hero__cta-group :global(.restaurant-hero__cta--primary:hover) {\n    background-color: var(--color-primary-600, #304b8d) !important;\n  }"
}
Let me also update the comment at the top of the CTA buttons section to reflect the change:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "offset": 397,
  "limit": 50
}
The changes have been applied. Now let me update the todo list and provide a summary:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase to find the homepage and 'Reserve Your Table' button",
      "status": "completed",
      "activeForm": "Exploring codebase to find the homepage and button"
    },
    {
      "content": "Update the hero CTA button color from burgundy to blue theme",
      "status": "completed",
      "activeForm": "Updating the hero CTA button color to match the blue theme"
    }
  ]
}
<summary>
## Summary: Fix "Reserve Your Table" Button Color to Match Blue/White Theme

### Changes Implemented
- Updated the primary CTA button styling in the RestaurantHeroSection component from burgundy/maroon color (`--color-burgundy: #722f37`) to the site's primary blue color (`--color-primary-500: #365395`)
- Updated the hover state from `--color-burgundy-light` to `--color-primary-600` (`#304b8d`)
- Changed text color from cream (`#fffbeb`) to white (`--color-text-inverse`) for better contrast on blue
- Updated dark mode styles to use the same primary blue colors for consistency

### Files Modified
- `src/components/RestaurantHeroSection.astro` - Updated primary CTA button styling (lines ~409-422 and ~649-655)

### Notes for Developer
- The "Reserve Your Table" button on the homepage hero section now uses the site's primary blue color palette (`--color-primary-500`/`--color-primary-600`) instead of the burgundy/maroon color
- This change affects only the hero section's primary CTA button; the secondary "View Our Menu" button retains its ghost/outline style
- The design system variables are used, so any future updates to `--color-primary-500` or `--color-primary-600` will automatically apply to this button
- Dark mode styling was also updated for consistency
</summary>