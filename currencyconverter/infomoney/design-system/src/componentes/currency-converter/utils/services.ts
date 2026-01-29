import { useState, useEffect } from 'react';
import { Device } from '../types';
import type { ResponsiveState, Breakpoint } from '../hooks/useResponsive';

/**
 * Serviço para detectar device (mobile/web)
 */
export const useDeviceService = (defaultDevice?: Device) => {
  const [device, setDeviceState] = useState<Device>(() => {
    if (defaultDevice) {
      return defaultDevice;
    }
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 'mobile' : 'web';
    }
    return 'web';
  });

  const [width, setWidth] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 1024;
  });

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);
      if (!defaultDevice) {
        const detectedDevice: Device = currentWidth < 768 ? 'mobile' : 'web';
        setDeviceState(detectedDevice);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [defaultDevice]);

  return {
    device,
    isMobile: device === 'mobile',
    isWeb: device === 'web',
    width,
    setDevice: setDeviceState,
  };
};

/**
 * Serviço para controlar estado de loading/skeleton
 */
export const useSkeletonService = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return { isLoading, setIsLoading };
};

/**
 * Serviço para detectar responsividade
 */
export const useResponsiveService = (): ResponsiveState => {
  const breakpoints = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };

  const [state, setState] = useState<ResponsiveState>(() => {
    if (typeof window === 'undefined') {
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        breakpoint: 'lg',
        width: 1024,
        height: 768,
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    
    let breakpoint: Breakpoint = 'xs';
    if (width >= breakpoints['2xl']) breakpoint = '2xl';
    else if (width >= breakpoints.xl) breakpoint = 'xl';
    else if (width >= breakpoints.lg) breakpoint = 'lg';
    else if (width >= breakpoints.md) breakpoint = 'md';
    else if (width >= breakpoints.sm) breakpoint = 'sm';
    else breakpoint = 'xs';

    return {
      isMobile: width < breakpoints.md,
      isTablet: width >= breakpoints.md && width < breakpoints.lg,
      isDesktop: width >= breakpoints.lg,
      breakpoint,
      width,
      height,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      let breakpoint: Breakpoint = 'xs';
      if (width >= breakpoints['2xl']) breakpoint = '2xl';
      else if (width >= breakpoints.xl) breakpoint = 'xl';
      else if (width >= breakpoints.lg) breakpoint = 'lg';
      else if (width >= breakpoints.md) breakpoint = 'md';
      else if (width >= breakpoints.sm) breakpoint = 'sm';
      else breakpoint = 'xs';

      setState({
        isMobile: width < breakpoints.md,
        isTablet: width >= breakpoints.md && width < breakpoints.lg,
        isDesktop: width >= breakpoints.lg,
        breakpoint,
        width,
        height,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return state;
};
