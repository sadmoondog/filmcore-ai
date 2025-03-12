
# Deploying to GitHub Pages

This document explains how to deploy the FILMCORE landing page to GitHub Pages.

## Prerequisites

1. Create a GitHub repository for your project
2. Push your code to the repository

## Deployment Steps

1. Make sure the `base` property in vite.config.ts matches your repository name:
   ```js
   base: mode === 'production' ? '/filmcore-ai/' : '/',
   ```
   Replace `filmcore-ai` with your actual repository name.

2. Run the following commands to deploy:
   ```
   npm run build
   npm run deploy
   ```

3. Configure GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select the "gh-pages" branch as the source
   - Save the changes

Your site should now be live at `https://yourusername.github.io/filmcore-ai/`!

## Troubleshooting

- If your site isn't loading correctly, make sure all assets have the correct paths.
- Check the browser console for any 404 errors.
- Ensure your repository is public or you have GitHub Pages enabled for private repositories.
