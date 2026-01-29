import React from 'react';
import * as Flags from 'country-flag-icons/react/3x2';

interface FlagIconProps {
  countryCode: string;
}

const FLAG_SIZE = 30; // Tamanho fixo: 30x30px

export const FlagIcon: React.FC<FlagIconProps> = ({ countryCode }) => {
  const normalizedCode = countryCode?.toUpperCase() || '';
  const FlagComponent = (Flags as any)[normalizedCode];
  
  if (!FlagComponent) {
    return (
      <div
        className="flex items-center justify-center rounded-full overflow-hidden shrink-0 bg-gray-200"
        style={{
          width: `${FLAG_SIZE}px`,
          height: `${FLAG_SIZE}px`,
          fontSize: `${FLAG_SIZE * 0.6}px`,
        }}
        title={`Bandeira não disponível: ${normalizedCode}`}
      >
        🌏
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center rounded-full overflow-hidden shrink-0"
      style={{
        width: `${FLAG_SIZE}px`,
        height: `${FLAG_SIZE}px`,
        minWidth: `${FLAG_SIZE}px`,
        minHeight: `${FLAG_SIZE}px`,
      }}
    >
      <FlagComponent
        className="w-full h-full"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
        title={countryCode}
      />
    </div>
  );
};
