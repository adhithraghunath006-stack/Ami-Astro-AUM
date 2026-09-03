# 3D Cinematic Layer Architectural Boundary (Phase 2)

This directory serves as the isolated architectural boundary for the future **React Three Fiber (R3F)** and **GSAP** cosmic opening sequence and interactive 3D solar system experience.

## Boundary Principles & Guidelines

1. **Isolation from DOM / Phase 1 Layout**:
   - The 3D canvas and WebGL pipeline must run inside dedicated client components (`"use client"`) without blocking SSR or Core Web Vitals of the standard HTML/CSS DOM pages.
   - Fallback states and prefers-reduced-motion media queries must be respected.

2. **Target Stack for Phase 2**:
   - `@react-three/fiber`
   - `@react-three/drei`
   - `three`
   - `gsap` (GreenSock Animation Platform)

3. **Planned Timeline Sequence (Visual Reference Panel 7)**:
   - `0 - 1.0s`: Deep cosmic darkness & starfield initialization
   - `1.0 - 2.5s`: First Light / Big Bang particle burst
   - `2.5 - 4.0s`: Cosmic particle cloud dispersal
   - `4.0 - 5.5s`: Universe forms / accretion disk
   - `5.5 - 6.5s`: Solar system forms with orbital trajectories
   - `6.5 - 7.5s`: Camera pull-back to planetary horizon
   - `7.5 - 8.0s`: Official AMI-ASTRO logo reveal
   - `8.0s+`: Smooth transition into main interactive website

4. **Component Stub**:
   - Use `CinematicBoundary.tsx` as the integration wrapper.
   - When enabled via environment flag or feature toggle (`NEXT_PUBLIC_ENABLE_3D_CINEMATIC="true"`), it will mount the WebGL canvas dynamically.
