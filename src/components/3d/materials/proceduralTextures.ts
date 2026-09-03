import * as THREE from 'three';

/**
 * Creates high-fidelity procedural planetary textures on HTML Canvas elements
 * and converts them into THREE.CanvasTexture instances.
 * This eliminates external image loading latency while delivering rich, realistic surface detail.
 */

// Cache textures so they are only generated once
const textureCache = new Map<string, THREE.CanvasTexture>();

export function getSunTexture(): THREE.CanvasTexture {
  if (textureCache.has('sun')) return textureCache.get('sun')!;

  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  // Radiant core gradient
  const grad = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  grad.addColorStop(0, '#FFFFFF');
  grad.addColorStop(0.25, '#FFFBEB');
  grad.addColorStop(0.55, '#FDE047');
  grad.addColorStop(0.8, '#F59E0B');
  grad.addColorStop(1, '#D97706');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  // Solar granulation noise
  for (let i = 0; i < 4000; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = Math.random() * 4 + 1;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle =
      Math.random() > 0.5 ? 'rgba(255,255,255,0.15)' : 'rgba(217,119,6,0.2)';
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  textureCache.set('sun', texture);
  return texture;
}

export function getJupiterTexture(): THREE.CanvasTexture {
  if (textureCache.has('jupiter')) return textureCache.get('jupiter')!;

  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Base amber cream tone
  ctx.fillStyle = '#C89D7C';
  ctx.fillRect(0, 0, width, height);

  // Turbulent horizontal atmospheric bands
  const colors = [
    '#9C6644', // Dark terracotta
    '#DDB892', // Cream amber
    '#7F4F24', // Deep rust brown
    '#EDE0D4', // White-cream cloud band
    '#B08968', // Sandy ochre
    '#654321', // Dark belt
    '#C49A6C', // Golden bronze
  ];

  for (let y = 0; y < height; y++) {
    const colorIndex =
      Math.floor((y / height) * colors.length * 2.5) % colors.length;
    ctx.fillStyle = colors[colorIndex];

    // Sinusoidal wave turbulence across longitude
    const wave =
      Math.sin(y * 0.08) * 4 + Math.sin(y * 0.02) * 8 + Math.cos(y * 0.15) * 2;
    ctx.fillRect(0, y + wave * 0.5, width, 1.5);
  }

  // Add the Great Red Spot / giant atmospheric storm
  const grsX = width * 0.65;
  const grsY = height * 0.62;
  const grsGrad = ctx.createRadialGradient(
    grsX,
    grsY,
    5,
    grsX,
    grsY,
    32
  );
  grsGrad.addColorStop(0, '#B91C1C');
  grsGrad.addColorStop(0.5, '#C2410C');
  grsGrad.addColorStop(1, 'transparent');

  ctx.save();
  ctx.scale(1.8, 1.0);
  ctx.fillStyle = grsGrad;
  ctx.beginPath();
  ctx.arc(grsX / 1.8, grsY, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  textureCache.set('jupiter', texture);
  return texture;
}

export function getSaturnTexture(): THREE.CanvasTexture {
  if (textureCache.has('saturn')) return textureCache.get('saturn')!;

  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Smooth pale golden atmosphere
  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0, '#A89F91'); // Polar haze
  grad.addColorStop(0.2, '#D4C3A3');
  grad.addColorStop(0.4, '#E2D4B7'); // Light equatorial zone
  grad.addColorStop(0.5, '#EFE5CE');
  grad.addColorStop(0.6, '#DFD0B3');
  grad.addColorStop(0.8, '#C9B896');
  grad.addColorStop(1, '#9E9484'); // South polar haze

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Subtle fine micro-stripes
  for (let y = 0; y < height; y += 3) {
    ctx.fillStyle =
      Math.random() > 0.5
        ? 'rgba(255,255,255,0.06)'
        : 'rgba(158,148,132,0.06)';
    ctx.fillRect(0, y, width, 1.5);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  textureCache.set('saturn', texture);
  return texture;
}

export function getSaturnRingTexture(): THREE.CanvasTexture {
  if (textureCache.has('saturn-ring')) return textureCache.get('saturn-ring')!;

  const width = 1024;
  const height = 64;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Linear gradient representing radius from inner ring to outer ring
  const grad = ctx.createLinearGradient(0, 0, width, 0);
  grad.addColorStop(0, 'rgba(190,170,140,0.0)'); // Inner edge transparent
  grad.addColorStop(0.08, 'rgba(190,170,140,0.4)'); // C Ring (faint)
  grad.addColorStop(0.25, 'rgba(220,200,165,0.85)'); // B Ring (bright, dense)
  grad.addColorStop(0.55, 'rgba(210,190,155,0.9)');
  grad.addColorStop(0.6, 'rgba(0,0,0,0.0)'); // Cassini Division (dark gap)
  grad.addColorStop(0.64, 'rgba(0,0,0,0.0)');
  grad.addColorStop(0.68, 'rgba(195,175,145,0.75)'); // A Ring
  grad.addColorStop(0.92, 'rgba(180,160,135,0.7)');
  grad.addColorStop(0.95, 'rgba(0,0,0,0.0)'); // Encke Gap
  grad.addColorStop(1, 'rgba(160,140,115,0.0)'); // Outer edge fade

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Add micro-ringlets variation
  for (let x = 0; x < width; x += 4) {
    if (x > width * 0.6 && x < width * 0.64) continue; // Skip Cassini
    ctx.fillStyle =
      Math.random() > 0.5 ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
    ctx.fillRect(x, 0, 2, height);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  textureCache.set('saturn-ring', texture);
  return texture;
}

export function getEarthTexture(): THREE.CanvasTexture {
  if (textureCache.has('earth')) return textureCache.get('earth')!;

  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Deep oceanic blue
  ctx.fillStyle = '#0F2B5C';
  ctx.fillRect(0, 0, width, height);

  // Continental landmasses
  ctx.fillStyle = '#2D6A4F'; // Forest emerald
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * width;
    const y = height * 0.2 + Math.random() * (height * 0.6);
    const r = Math.random() * 60 + 20;

    ctx.beginPath();
    ctx.ellipse(x, y, r * 1.6, r, Math.random() * 0.6, 0, Math.PI * 2);
    ctx.fill();
  }

  // Continental dry ochre/brown highlands
  ctx.fillStyle = '#785938';
  for (let i = 0; i < 25; i++) {
    const x = Math.random() * width;
    const y = height * 0.25 + Math.random() * (height * 0.5);
    const r = Math.random() * 30 + 10;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Polar ice caps
  ctx.fillStyle = '#E2E8F0';
  ctx.fillRect(0, 0, width, height * 0.08); // North pole
  ctx.fillRect(0, height * 0.92, width, height * 0.08); // South pole

  // Wispy cloud swirls
  ctx.fillStyle = 'rgba(255,255,255,0.45)';
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    ctx.beginPath();
    ctx.ellipse(
      x,
      y,
      Math.random() * 120 + 40,
      Math.random() * 20 + 8,
      Math.sin(x * 0.01) * 0.4,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  textureCache.set('earth', texture);
  return texture;
}

export function getMarsTexture(): THREE.CanvasTexture {
  if (textureCache.has('mars')) return textureCache.get('mars')!;

  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Rust red base
  ctx.fillStyle = '#B45309';
  ctx.fillRect(0, 0, width, height);

  // Dark basalt maria regions
  ctx.fillStyle = '#683615';
  for (let i = 0; i < 35; i++) {
    const x = Math.random() * width;
    const y = height * 0.2 + Math.random() * (height * 0.6);
    const r = Math.random() * 50 + 15;
    ctx.beginPath();
    ctx.ellipse(x, y, r * 1.5, r, Math.random() * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Polar ice caps
  ctx.fillStyle = '#FEF3C7';
  ctx.fillRect(0, 0, width, height * 0.05);
  ctx.fillRect(0, height * 0.95, width, height * 0.05);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  textureCache.set('mars', texture);
  return texture;
}
