# Blazor GitHub Page
This is a simple guide to create a GitHub page using Blazor WASM and is the same process I used to create my [personal website](https://mattjdavey.github.io).

- First you'll need to create a [GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
- After creating your GitHub Pages site, clone down the repository and in Rider, create a new solution using the "Blazor WebAssembly Standalone" App template.
  - If you don't have Rider, you can use Visual Studio or the dotnet CLI.
  - If you want to add Tailwind, you can visit [this guide](https://mattjdavey.github.io/blog/add-tailwind-to-blazor-app).
- In the root of the project, create a new GitHub workflow file `.github/workflows/deploy.yml`.
- Add the following content to the file (you can remove "Install NPM dependencies" step if you aren't using Node.js):
``` yaml
name: Blazor WASM deployment.

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "lts/*"

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Setup .NET
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '9.0.x'

      - name: Install NPM dependencies
        run: npm install
        working-directory: ./Portfolio

      - name: Publish Blazor WASM
        run: |
          dotnet publish -c Release -o dist
          
      - name: Create .nojekyll file
        run: touch dist/wwwroot/.nojekyll

      - name: Copy index.html to 404.html
        run: |
          cp dist/wwwroot/index.html dist/wwwroot/404.html  

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./publish/wwwroot

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
- Commit and push the changes to the main branch. Once your workflow is complete, you should be able to view your site 
  at `https://<username>.github.io`.