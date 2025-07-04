<!-- BANNER -->

<p align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212747107-5b654ba5-31c6-4366-b42b-51b822e9bc52.gif" width="100%" />
</p>

<h1 align="center">📝 GitHub README Generator</h1>
<p align="center">
  A sleek web app to generate beautiful GitHub profile READMEs visually — no Markdown needed!
</p>

<p align="center">
  <a href="https://PhoniexCoder.github.io/Github-Profile-Generator" target="_blank">
    🔗 <strong>Live Demo</strong>
  </a>
  ·
  <a href="https://github.com/PhoniexCoder/Github-Profile-Generator/issues" target="_blank">🐛 Report Bug</a>
  ·
  <a href="https://github.com/PhoniexCoder/Github-Profile-Generator/issues" target="_blank">💡 Request Feature</a>
</p>

## ✨ Features

```markdown
- 🔥 Step-by-step UI to build your profile
- 🖼️ Banner & About GIFs
- ⌨️ Auto-typing header text
- ✍️ About section with emojis and bullet points
- 🌐 Social media links with icons
- 🧰 Tech stack badges/icons
- 📊 GitHub Stats, Top Languages, Streaks, and Trophies
- 👁️‍🗨️ Optional profile view counter
- 🧾 Live Markdown preview and raw markdown view
- 📋 Copy to clipboard or download as file
- 💻 Fully responsive and static deployable
```

## 🚀 Live Demo

```markdown
🔗 **[Click here to try it!](https://PhoniexCoder.github.io/Github-Profile-Generator)**
```

## 🖼️ Screenshots

```markdown
> Add screenshots here (e.g., form UI, live preview, copy/download buttons)
```

## 🛠️ Tech Stack

```markdown
- **Framework:** Next.js (App Router with `output: "export"`)
- **Frontend:** React 18, Tailwind CSS, Radix UI, Lucide Icons
- **Markdown Rendering:** `react-markdown`
- **Deployment:** GitHub Pages via `gh-pages`
- **Other:** TypeScript ready, responsive design
```

## 📂 Project Structure

```markdown
📦 readme-generator
├── app/               # Main app and components
├── public/            # Static assets (GIFs, logos)
├── styles/            # Global Tailwind and markdown styles
├── out/               # Static site output (for deployment)
├── package.json       # Scripts & dependencies
├── next.config.mjs    # Next.js config with static export
└── tsconfig.json      # TypeScript config (safe to keep)
```

## ⚙️ Getting Started

```bash
# Clone the repo
git clone https://github.com/PhoniexCoder/Github-Profile-Generator.git
cd Github-Profile-Generator

# Install dependencies
pnpm install   # or npm install

# Start development server
pnpm dev       # or npm run dev
```

## 📦 Build & Deploy (Static Export for GitHub Pages)

```bash
# 1. Build the static site
pnpm build && pnpm export

# 2. Deploy to GitHub Pages
pnpm deploy
```

✅ Ensure your `next.config.mjs` contains:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Github-Profile-Generator',
};

export default nextConfig;
```

## 👤 Author

```markdown
**Prins Kanyal**

- 📧 Email: [prinskanyal@gmail.com](mailto:prinskanyal@gmail.com)
- 🌐 GitHub: [github.com/PhoniexCoder](https://github.com/PhoniexCoder)
- 💼 LinkedIn: [linkedin.com/in/prins-kanyal](https://www.linkedin.com/in/prins-kanyal/)
```

## 🤝 Contributing

```markdown
Contributions are welcome!  
If you’d like to improve this project or suggest a feature, open an issue or pull request.
```

## 📄 License

```markdown
This project is licensed under the [MIT License](LICENSE).
```

## ⭐️ Show Your Support

```markdown
If you like this project, give it a ⭐️ on [GitHub](https://github.com/PhoniexCoder/Github-Profile-Generator)!
```
