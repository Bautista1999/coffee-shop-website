/**
 * Brand Meta Component
 * For use in layout.tsx to handle PWA and browser meta tags
 * Note: Next.js 13+ App Router handles most meta tags through metadata export
 */

import { logoAssets, primaryBrandColor } from '@/types/brand';

export default function BrandMeta() {
  return (
    <>
      {/* Favicon and Icons */}
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={logoAssets.icon16}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={logoAssets.icon32}
      />
      <link rel='apple-touch-icon' sizes='192x192' href={logoAssets.icon192} />

      {/* PWA Manifest */}
      <link rel='manifest' href='/site.webmanifest' />

      {/* Theme Colors */}
      <meta name='theme-color' content={primaryBrandColor} />
      <meta name='msapplication-TileColor' content={primaryBrandColor} />

      {/* Additional PWA Meta Tags */}
      <meta name='application-name' content='Coffee Shop' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='Coffee Shop' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />

      {/* Preload Fonts */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
    </>
  );
}
