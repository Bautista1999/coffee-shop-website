# Coffee Shop Website

A modern, responsive coffee shop website built from scratch with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- 🎯 ESLint for code quality
- 🚀 Optimized for performance
- 📱 Responsive design
- ☕ Coffee-themed color palette

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom coffee theme
- **Development**: ESLint, PostCSS, Autoprefixer
- **Utilities**: clsx, tailwind-merge
- **Deployment**: Vercel (planned)

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with fonts and metadata
│   └── page.tsx      # Homepage
├── components/       # Reusable UI components
│   └── ui/
│       └── Button.tsx
├── lib/             # Utility functions
│   └── utils.ts
├── styles/          # Global styles and Tailwind imports
│   └── globals.css
└── types/           # TypeScript type definitions
    └── index.ts
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Type check without emitting files

## Color Theme

The project includes a custom coffee-themed color palette:

- Coffee-50 to Coffee-900 variants
- Optimized for accessibility and visual appeal

## Next Steps

- Add coffee shop logo integration
- Create about, menu, and contact sections
- Implement responsive navigation
- Add location and contact forms
- Optimize for SEO and performance

## Author

Juan Bautista Martinez
