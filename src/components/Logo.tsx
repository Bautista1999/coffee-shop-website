/**
 * Logo Component
 * Responsive logo component with multiple size variants
 */

import Image from 'next/image';
import { getLogo } from '@/utils/brand';

interface LogoProps {
  variant?:
    | 'header'
    | 'primary'
    | 'large'
    | 'icon-small'
    | 'icon-medium'
    | 'icon-large';
  className?: string;
  alt?: string;
  priority?: boolean;
}

const sizeMap = {
  header: { width: 200, height: 60 },
  primary: { width: 180, height: 54 },
  large: { width: 400, height: 120 },
  'icon-small': { width: 32, height: 32 },
  'icon-medium': { width: 64, height: 64 },
  'icon-large': { width: 192, height: 192 },
};

export default function Logo({
  variant = 'primary',
  className = '',
  alt = 'Coffee Shop Logo',
  priority = false,
}: LogoProps) {
  const logoSrc = getLogo(variant);
  const { width, height } = sizeMap[variant];

  return (
    <Image
      src={logoSrc}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority={priority}
      quality={90}
    />
  );
}

/**
 * Icon-only logo component for navigation and small spaces
 */
interface LogoIconProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  alt?: string;
}

export function LogoIcon({
  size = 'medium',
  className = '',
  alt = 'Coffee Shop Icon',
}: LogoIconProps) {
  const variant =
    size === 'small'
      ? 'icon-small'
      : size === 'large'
        ? 'icon-large'
        : 'icon-medium';

  return <Logo variant={variant} className={className} alt={alt} />;
}
