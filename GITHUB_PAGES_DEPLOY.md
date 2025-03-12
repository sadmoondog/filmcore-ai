
# Deploying to GitHub Pages

This document explains how to deploy the FILMCORE landing page to GitHub Pages.

## Prerequisites

1. Create a GitHub repository for your project
2. Push your code to the repository

## Deployment Steps

1. Update the "homepage" field in your package.json to match your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

2. Update the `base` property in vite.config.ts to match your repository name:
   ```js
   base: mode === 'production' ? '/your-repo-name/' : '/',
   ```

3. Install the gh-pages package (if not already installed):
   ```
   npm install gh-pages --save-dev
   ```

4. Add the following scripts to your package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

5. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

6. Configure GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select the "gh-pages" branch as the source
   - Save the changes

Your site should now be live at `https://yourusername.github.io/your-repo-name`!

## Troubleshooting

- If your site isn't loading correctly, make sure all assets have the correct paths.
- Check the browser console for any 404 errors.
- Ensure your repository is public or you have GitHub Pages enabled for private repositories.
