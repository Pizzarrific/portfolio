# Uzair Mohammed — Portfolio

A single self contained HTML file (`index.html`). No build step, no dependencies to install, no framework tooling. Open it directly in a browser and it works.

## Deploy it (pick one)

### Option 1: GitHub Pages (recommended)

```bash
# from the folder containing index.html
git init
git add index.html
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Then on GitHub:
1. Go to your repo's **Settings → Pages**
2. Under "Source," choose the `main` branch and `/root` folder, then Save
3. Your site goes live at `https://YOUR_USERNAME.github.io/portfolio/` within a minute or two

### Option 2: Netlify Drop (fastest, zero setup)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag `index.html` onto the page
3. You get a live URL immediately. Create a free account to keep it permanently and set a custom subdomain.

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com), sign in with GitHub
2. Import the same repo you pushed in Option 1 (or drag and drop the file via their dashboard)
3. Deploy. You get a `.vercel.app` URL, with the option to attach a custom domain later.

## Contact form

The form on the Contact section submits to Formspree:

```
https://formspree.io/f/xeajlrpr
```

Formspree holds your very first submission for manual confirmation on the free tier. After you deploy, send yourself one test message and check your inbox (and spam folder) for the confirmation email from Formspree. Every submission after that one delivers straight through, no further setup needed.

## Custom domain (optional)

If you buy a domain (Namecheap, Google Domains, etc), all three hosts above let you point it at your site for free under their custom domain settings.

## Making changes

Everything, structure, styling, and behavior, lives inside `index.html`:
- CSS is in the `<style>` block near the top
- JavaScript is in the `<script>` block near the bottom
- Content (text, links, project details) is in the HTML body in between

Edit directly in any text editor, save, and re-deploy using whichever method you chose above.
