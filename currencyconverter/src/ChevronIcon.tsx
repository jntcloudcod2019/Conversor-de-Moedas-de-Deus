import React from "react";

interface ChevronIconProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  className?: string;
}

export const ChevronIcon: React.FC<ChevronIconProps> = ({ 
  size = 20, 
  color = "#525252",
  onClick,
  className = ""
}) => {
  const svgElement = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`inline-flex items-center justify-center p-0 m-0 border-0 bg-transparent cursor-pointer hover:opacity-70 transition-opacity focus:outline-none focus:ring-0 active:bg-transparent ${className}`}
        style={{ 
          width: size, 
          height: size, 
          minWidth: size, 
          minHeight: size,
          backgroundColor: 'transparent',
          background: 'transparent',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
        }}
        aria-label="Abrir dropdown"
      >
        {svgElement}
      </button>
    );
  }

  return <span className={className}>{svgElement}</span>;
};

/**
 * Ícone de setas bidirecionais - Versão Web (seta esquerda em cima, seta direita embaixo)
 */
export const SwapIconWeb: React.FC = () => {
  
  return (
    <svg
      width={50}
      height={50}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-swap-icon="web"
    >
      {/* Círculo de fundo azul */}
      <circle cx="24" cy="24" r="24" fill="#007bff" />
      {/* Linha horizontal superior com seta apontando para esquerda */}
      <line x1="18" y1="18" x2="30" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M20 16 L18 18 L20 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Linha horizontal inferior com seta apontando para direita */}
      <line x1="18" y1="30" x2="30" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M28 28 L30 30 L28 32"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

/**
 * Ícone de setas bidirecionais - Versão Mobile (setas HORIZONTAIS - igual ao web)
 * SVG específico para mobile com setas horizontais
 */
export const SwapIconMobile = React.forwardRef<SVGSVGElement>((_props, ref) => {
  return (
    <svg
      ref={ref}
      width={50}
      height={50}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
      }}
      data-swap-icon="mobile"
    >
      {/* Círculo de fundo azul */}
      <circle cx="24" cy="24" r="24" fill="#007bff" />
      {/* Linha horizontal superior com seta apontando para esquerda */}
      <line x1="18" y1="18" x2="30" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M20 16 L18 18 L20 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Linha horizontal inferior com seta apontando para direita */}
      <line x1="18" y1="30" x2="30" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M28 28 L30 30 L28 32"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
});

SwapIconMobile.displayName = 'SwapIconMobile';

/**
 * Botão Swap para Web - usa ícone horizontal
 */
export const SwapButtonWeb: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      title="Trocar moedas"
      className="inline-flex items-center justify-center p-0 m-0 bg-transparent border-0 outline-none appearance-none cursor-pointer"
      style={{
        width: 50,
        height: 50,
        boxShadow: 'none',
        background: 'transparent',
        border: 'none',
        padding: 0,
        margin: 0,
      }}
      aria-label="Trocar moedas"
      data-swap-button="web"
    >
      <SwapIconWeb />
    </button>
  );
};

/**
 * Botão Swap para Mobile - usa ícone horizontal (setas horizontais - igual ao web)
 */
export const SwapButtonMobile: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      title="Trocar moedas"
      className="inline-flex items-center justify-center p-0 m-0 bg-transparent border-0 outline-none appearance-none cursor-pointer"
      style={{
        width: 50,
        height: 50,
        boxShadow: 'none',
        background: 'transparent',
        border: 'none',
        padding: 0,
        margin: 0,
      }}
      aria-label="Trocar moedas"
      data-swap-button="mobile"
    >
      <SwapIconMobile ref={svgRef} />
    </button>
  );
};
