import React from 'react';
import { BRAND } from './BRAND';

/**
 * The ClaimFlow mark: a gradient tile carrying A double aegis shield with resolved check and crown notch.
 * Vector only - no raster assets - so it stays crisp at any size and
 * inherits the surrounding layout.
 */
export function BrandMark({ size = 34, className = '', title, ...rest }) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const gid = `bm-{uid}`;
  const label = title || BRAND.name;
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={label}
      {...rest}
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={BRAND.primary} />
          <stop offset="100%" stopColor={BRAND.secondary} />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14.3" fill={`url(#${gid})`} />
      <g transform="translate(14.0 14.0) scale(0.5625)">
        <polygon points='32,7 53,16 53,33 32,57 11,33 11,16' fill='#ffffff'/><polygon points='32,13 47,20 47,32 32,50 17,32 17,20' fill='#4a274f'/><polygon points='23,31 29,37 42,23 45,26 29,43 20,34' fill='#ffffff'/><polygon points='29,7 35,7 33,12 31,12' fill='#ffffff'/>
      </g>
    </svg>
  );
}

export default BrandMark;
