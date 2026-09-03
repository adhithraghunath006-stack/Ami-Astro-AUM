'use client';

/**
 * Clean extension interfaces and hooks for future Phase 2+ features.
 * (Meteors, orbital vessels, astronaut models, cursor gravity).
 * Stubs are defined here without loading heavy assets or adding bloat.
 */

export interface MeteorEntityConfig {
  frequency: number;
  trajectory: [number, number, number];
  color: string;
}

export interface SpacecraftEntityConfig {
  modelUrl?: string;
  orbitRadius: number;
  speed: number;
}

export interface AstronautEntityConfig {
  modelUrl?: string;
  tethered: boolean;
  driftRange: number;
}

/**
 * Extension Hook: Future Shooting Stars & Meteor Showers
 */
export function useMeteorFieldExtension(config?: Partial<MeteorEntityConfig>) {
  return {
    isEnabled: false,
    activeMeteors: [],
    spawnMeteor: () => {
      // Stub: will spawn instanced streak in future milestone
    },
  };
}

/**
 * Extension Hook: Future Orbital Spaceship / Satellite
 */
export function useSpacecraftExtension(config?: Partial<SpacecraftEntityConfig>) {
  return {
    isEnabled: false,
    position: [0, 0, 0] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  };
}

/**
 * Extension Hook: Future Spacewalking Astronaut
 */
export function useAstronautExtension(config?: Partial<AstronautEntityConfig>) {
  return {
    isEnabled: false,
    position: [0, 0, 0] as [number, number, number],
  };
}
