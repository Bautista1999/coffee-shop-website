/**
 * Brand color definitions and TypeScript types
 * These match the Tailwind CSS configuration
 */

export const brandColors = {
  coffee: {
    50: '#f7f3f0', // Light cream, backgrounds
    100: '#ede4d8', // Soft beige, subtle backgrounds
    200: '#dcc8b1', // Light brown, borders
    300: '#c8a882', // Medium light brown, secondary text
    400: '#b58b5a', // Coffee with milk, accents
    500: '#a67c52', // Primary brand brown, main CTA
    600: '#8b6f47', // Rich coffee brown, primary text/logos (PRIMARY BRAND)
    700: '#6f5a3c', // Dark brown, emphasis
    800: '#5c4a35', // Deep brown, strong contrast
    900: '#4e3f30', // Darkest brown, maximum contrast
  },
} as const;

export type CoffeeColorShades = keyof typeof brandColors.coffee;

export const primaryBrandColor = brandColors.coffee[600]; // #8b6f47

/**
 * Semantic color mappings for consistent usage
 */
export const semanticColors = {
  primary: brandColors.coffee[600], // Main brand color
  primaryHover: brandColors.coffee[700], // Hover states for primary
  text: brandColors.coffee[800], // Primary text
  textSecondary: brandColors.coffee[600], // Secondary text
  textLight: brandColors.coffee[300], // Light text
  background: brandColors.coffee[50], // Main background
  backgroundSecondary: brandColors.coffee[100], // Section backgrounds
  border: brandColors.coffee[200], // Borders and dividers
  accent: brandColors.coffee[500], // Accent elements
} as const;

export type SemanticColorKeys = keyof typeof semanticColors;

/**
 * Logo asset paths
 */
export const logoAssets = {
  primary: '/images/logo.png',
  header: '/images/logo-header.png',
  large: '/images/logo-large.png',
  social: '/images/logo-social.png',
  icon16: '/images/logo-icon-16.png',
  icon32: '/images/logo-icon-32.png',
  icon64: '/images/logo-icon-64.png',
  icon192: '/images/icon-192.png',
  icon512: '/images/icon-512.png',
} as const;

export type LogoAssetKeys = keyof typeof logoAssets;

/**
 * Typography definitions
 */
export const typography = {
  fonts: {
    sans: ['Inter', 'sans-serif'],
    serif: ['Playfair Display', 'serif'],
  },
  usage: {
    headings: 'serif', // Playfair Display for elegant headers
    body: 'sans', // Inter for body text and UI
    ui: 'sans', // Inter for UI elements
  },
} as const;
