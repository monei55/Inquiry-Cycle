# Upload this project to GitHub

## Browser method

1. Open your new GitHub repository.
2. Select **Add file → Upload files**.
3. Extract the downloaded ZIP on your computer first.
4. Drag all extracted files and folders into GitHub. Include the hidden `.github` folder.
5. Add a commit message such as `Add From Evidence to Impact website` and select **Commit changes**.
6. Open **Settings → Pages** and choose **GitHub Actions** under **Build and deployment**.
7. Open the repository **Actions** tab. The included deployment workflow will install, build and publish the site.

## Git command method

```bash
git clone YOUR_REPOSITORY_URL
cd YOUR_REPOSITORY_FOLDER
# Copy the project files into this folder
git add .
git commit -m "Add From Evidence to Impact website"
git push origin main
```

Then choose **GitHub Actions** in **Settings → Pages**.

## Important

- Keep `index.html`, `package.json` and `vite.config.js` in the repository root.
- Do not upload the outer ZIP file itself as the website contents.
- The `static-preview.html` file is a no-build preview of the earlier prototype; the React application is the main project.
