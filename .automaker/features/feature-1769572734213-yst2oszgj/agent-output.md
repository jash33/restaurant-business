
🔧 Tool: Glob
Input: {
  "pattern": "**/*config*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/vite.config.*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/webpack.config.*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/package.json"
}
I can see this is an Astro project. Let me check the `astro.config.mjs` and `package.json` files to understand how the dev port is configured:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\astro.config.mjs"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}
I found the configuration. The `astro.config.mjs` file has a `server` configuration section, but it doesn't currently specify a port. In Astro, the default dev port is 4321 (previously it was 3000 in older versions). To change it to 3004, I need to add the `port` property to the `server` configuration.

Let me make the change:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\astro.config.mjs",
  "old_string": "  // Server configuration\n  server: {\n    // Enable compression in dev\n    headers: {\n      // Security headers\n      'X-Content-Type-Options': 'nosniff',\n      'X-Frame-Options': 'SAMEORIGIN',\n      'X-XSS-Protection': '1; mode=block',\n    },\n  },",
  "new_string": "  // Server configuration\n  server: {\n    // Default dev port\n    port: 3004,\n    // Enable compression in dev\n    headers: {\n      // Security headers\n      'X-Content-Type-Options': 'nosniff',\n      'X-Frame-Options': 'SAMEORIGIN',\n      'X-XSS-Protection': '1; mode=block',\n    },\n  },"
}
Let me verify the change was applied correctly:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\astro.config.mjs"
}
The change has been applied successfully. The `port: 3004` has been added to the server configuration on line 107.

<summary>
## Summary: Change the Default Dev Port to 3004

### Changes Implemented
- Added `port: 3004` to the server configuration in the Astro config file
- The dev server will now run on port 3004 instead of the default Astro port (4321)

### Files Modified
- `astro.config.mjs` - Added `port: 3004` to the `server` configuration object

### Notes for Developer
- Run `npm run dev` to start the development server on port 3004
- The server will be available at `http://localhost:3004`
- If port 3004 is already in use, Astro will automatically try the next available port
</summary>