'use client';

import { useState, useEffect } from 'react';

export interface DeviceProfile {
  isMobile: boolean;
  particleCount: number;
  dpr: number;
  fov: number;
}

export function useDeviceTier(): DeviceProfile {
  const [profile, setProfile] = useState<DeviceProfile>({
    isMobile: false,
    particleCount: 3500,
    dpr: 1.5,
    fov: 45,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkDevice = () => {
      const isSmall = window.innerWidth < 768;
      const pixelRatio = window.devicePixelRatio || 1;

      setProfile({
        isMobile: isSmall,
        particleCount: isSmall ? 1200 : 3500,
        dpr: Math.min(pixelRatio, isSmall ? 1.2 : 1.5),
        fov: isSmall ? 60 : 45,
      });
    };

    checkDevice();
    window.addEventListener('resize', checkDevice, { passive: true });
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return profile;
}
