import React from 'react';
import logoImg from '../assets/images/ruma_logo_png_1779102933223.png';

interface LogoProps {
  className?: string;
  size?: number | string;
  variant?: 'full' | 'symbol';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 44,
}) => {
  const parsedSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <img
      src={logoImg}
      alt="Delerny Logo"
      className={className}
      style={{
        width: parsedSize,
        height: parsedSize,
        objectFit: 'contain',
      }}
      referrerPolicy="no-referrer"
    />
  );
};
