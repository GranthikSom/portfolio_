# Granthik Som - Premium Portfolio

A modern, high-end developer portfolio built with Next.js 15, Tailwind CSS, and Framer Motion.

## 🚀 Setup & Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment Instructions

### Vercel (Recommended for Next.js)
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click **Add New** > **Project**.
4. Import your GitHub repository.
5. Vercel will automatically detect Next.js. Click **Deploy**.

### Netlify
1. Push your code to GitHub.
2. Go to [Netlify](https://www.netlify.com/) and sign in.
3. Click **Add new site** > **Import an existing project**.
4. Connect to GitHub and select the repository.
5. Build settings will be auto-detected (`npm run build`, `.next`). Click **Deploy Site**.

### GitHub Pages
Next.js applications can be exported to static HTML and hosted on GitHub Pages.
1. Update `next.config.ts` to enable static export:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: "export",
   };

   export default nextConfig;
   ```
2. Run `npm run build`. This will create an `out` directory.
3. Deploy the contents of the `out` directory to your `gh-pages` branch. You can use the `gh-pages` npm package to automate this.

## 🛠 Tech Stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
# portfolio_
