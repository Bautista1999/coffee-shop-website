# Development Setup Guide

## Available Scripts

### Development

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server

### Code Quality

- `npm run lint` - Run ESLint linter
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run prettier` - Check code formatting
- `npm run prettier:fix` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code and fix linting issues
- `npm run check` - Run type checking and linting

### Git Hooks

Pre-commit hooks are automatically set up with Husky and will:

- Run ESLint with auto-fix on staged TypeScript/JavaScript files
- Format staged files with Prettier
- Only allow commits if all checks pass

## Tools Configured

### ESLint

- Next.js core web vitals rules
- Prettier integration for formatting consistency
- TypeScript support
- Custom rules for code quality

### Prettier

- Consistent code formatting
- Single quotes, semicolons, 2-space indentation
- Automatic formatting on save (VS Code)

### TypeScript

- Strict type checking
- Path aliases (`@/*` → `./src/*`)
- Next.js integration

### VS Code Integration

Recommended extensions:

- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

## Setup Instructions

1. Install dependencies: `npm install`
2. Install recommended VS Code extensions
3. Start development server: `npm run dev`

## Code Quality Workflow

1. Write code with automatic formatting on save
2. Run `npm run check` before committing
3. Commit changes (pre-commit hooks will run automatically)
4. Push to repository

## Troubleshooting

- If pre-commit hooks fail, run `npm run format` to fix issues
- For type errors, run `npm run type-check` to see details
- For linting issues, run `npm run lint` and fix manually or use `npm run lint:fix`
