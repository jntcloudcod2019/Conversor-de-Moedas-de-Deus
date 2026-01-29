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
        className={`chevron-button inline-flex items-center justify-center p-0 m-0 border-0 bg-transparent cursor-pointer hover:opacity-70 transition-opacity focus:outline-none focus:ring-0 active:bg-transparent ${className}`}
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
 * Ícone de Swap para Web - setas horizontais (esquerda ← → direita)
 */
export const SwapIconWeb: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="swap-icon-web"
      style={{
        display: 'block',
        width: '24px',
        height: '24px',
      }}
    >
      <path
        d="M7 16L3 12L7 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 8L21 12L17 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * Ícone de Swap para Mobile - setas horizontais (esquerda ← → direita) - igual ao web
 */
export const SwapIconMobile = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="swap-icon-mobile"
        style={{
          display: 'block',
          width: '24px',
          height: '24px',
        }}
      >
        <path
          d="M7 16L3 12L7 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 8L21 12L17 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

SwapIconMobile.displayName = 'SwapIconMobile';

/**
 * Botão Swap para Web
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
