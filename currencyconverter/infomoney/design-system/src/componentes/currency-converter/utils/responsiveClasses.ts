/**
 * Utilitários para classes CSS responsivas
 * Facilita a aplicação de estilos responsivos de forma consistente
 */

export const responsiveClasses = {
  // Padding responsivo
  padding: {
    container: 'p-4 sm:p-6 lg:p-8',
    input: 'px-3 sm:px-4 py-3',
    button: 'px-4 sm:px-6 py-2 sm:py-3',
  },
  
  // Texto responsivo
  text: {
    h1: 'text-2xl sm:text-3xl lg:text-4xl',
    h2: 'text-xl sm:text-2xl lg:text-3xl',
    h3: 'text-lg sm:text-xl lg:text-2xl',
    body: 'text-sm sm:text-base',
    small: 'text-xs sm:text-sm',
    large: 'text-lg sm:text-xl',
  },
  
  // Largura responsiva
  width: {
    container: 'w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto',
    input: 'w-full min-w-0',
    dropdown: 'w-auto min-w-[70px] sm:min-w-[81px]',
  },
  
  // Gap responsivo
  gap: {
    small: 'gap-2 sm:gap-4',
    medium: 'gap-4 sm:gap-6',
    large: 'gap-6 sm:gap-8',
  },
  
  // Layout responsivo
  layout: {
    row: 'flex-col sm:flex-row',
    column: 'flex-col',
    center: 'items-center justify-center',
    between: 'items-center justify-between',
  },
  
  // Visibilidade responsiva
  visibility: {
    mobileOnly: 'block sm:hidden',
    desktopOnly: 'hidden sm:block',
    tabletOnly: 'hidden md:block lg:hidden',
  },
};

/**
 * Gera classes Tailwind responsivas baseadas no breakpoint
 */
export const getResponsiveClass = (
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string
): string => {
  const classes = [base];
  if (sm) classes.push(`sm:${sm}`);
  if (md) classes.push(`md:${md}`);
  if (lg) classes.push(`lg:${lg}`);
  if (xl) classes.push(`xl:${xl}`);
  return classes.join(' ');
};
