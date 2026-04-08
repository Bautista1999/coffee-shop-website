/**
 * Brand utilities for easy access to assets and colors
 */

import {
  logoAssets,
  semanticColors,
  brandColors,
  typography,
} from '@/types/brand';

/**
 * Get logo asset path by use case
 */
export const getLogo = (
  usage:
    | 'header'
    | 'primary'
    | 'large'
    | 'social'
    | 'icon-small'
    | 'icon-medium'
    | 'icon-large'
    | 'pwa'
) => {
  switch (usage) {
    case 'header':
      return logoAssets.header;
    case 'primary':
      return logoAssets.primary;
    case 'large':
      return logoAssets.large;
    case 'social':
      return logoAssets.social;
    case 'icon-small':
      return logoAssets.icon16;
    case 'icon-medium':
      return logoAssets.icon64;
    case 'icon-large':
      return logoAssets.icon192;
    case 'pwa':
      return logoAssets.icon512;
    default:
      return logoAssets.primary;
  }
};

/**
 * Get semantic color value
 */
export const getColor = (colorName: keyof typeof semanticColors) => {
  return semanticColors[colorName];
};

/**
 * Get coffee color shade
 */
export const getCoffeeColor = (shade: keyof typeof brandColors.coffee) => {
  return brandColors.coffee[shade];
};

/**
 * Get appropriate text color based on background
 */
export const getTextColor = (background: 'light' | 'medium' | 'dark') => {
  switch (background) {
    case 'light':
      return semanticColors.text; // Dark text on light background
    case 'medium':
      return semanticColors.text; // Dark text on medium background
    case 'dark':
      return getCoffeeColor(100); // Light text on dark background
    default:
      return semanticColors.text;
  }
};

/**
 * Get font family based on usage
 */
export const getFontFamily = (usage: 'heading' | 'body' | 'ui') => {
  switch (usage) {
    case 'heading':
      return typography.fonts.serif.join(', ');
    case 'body':
    case 'ui':
      return typography.fonts.sans.join(', ');
    default:
      return typography.fonts.sans.join(', ');
  }
};

/**
 * Brand-compliant button styles
 */
export const buttonStyles = {
  primary: {
    backgroundColor: semanticColors.primary,
    color: semanticColors.background,
    hoverBackgroundColor: semanticColors.primaryHover,
    borderColor: semanticColors.primary,
  },
  secondary: {
    backgroundColor: 'transparent',
    color: semanticColors.primary,
    borderColor: semanticColors.primary,
    hoverBackgroundColor: semanticColors.primary,
    hoverColor: semanticColors.background,
  },
  outline: {
    backgroundColor: 'transparent',
    color: semanticColors.text,
    borderColor: semanticColors.border,
    hoverBackgroundColor: semanticColors.backgroundSecondary,
  },
} as const;

export type ButtonStyleVariants = keyof typeof buttonStyles;
