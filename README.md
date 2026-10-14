# Image Search

A small page for finding photos by a keyword. You type a word, the app asks
Pixabay for matches, and shows them in a gallery. Click a photo to open a bigger
version.

## Run it locally

You need the LTS version of Node.js. Download it from
[nodejs.org](https://nodejs.org/) if it is not installed yet.

In the project folder run:

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173). The page reloads on
its own when you save a file.

The Pixabay API key sits in `src/js/pixabay-api.js`.

## Deploy

A push to the `main` branch builds the app and publishes it to GitHub Pages, on
the `gh-pages` branch. The build command in `package.json` already uses
`--base=/goit-advancedjs-hw-03/`.

In the repo settings (`Settings` > `Pages`), serve the files from the `/root`
folder of the `gh-pages` branch if that was not set automatically. The live page
shows up there after a few minutes.

The icon next to the latest commit shows how the deploy is going:

- Yellow means the build is still running.
- Green means it finished.
- Red means something failed. Open the icon and follow `Details` to see the log.

If the live page is blank, check the browser console for missing CSS or JS files
(404). The `--base` value in the build script probably does not match the
repository name.

What happens on each push to `main`:

1. GitHub runs the script in `.github/workflows/deploy.yml`.
2. It installs dependencies and builds the project.
3. If the build is fine, the result is pushed to `gh-pages`. If not, the action
   log says what broke.
