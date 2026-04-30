import * as THREE from 'three';

import * as dim from '#dimensions';

export const barColors = [
  { from: 0.1, color: new THREE.Color(0xff4444) },
  { from: 0.25, color: new THREE.Color(0xff8800) },
  { from: 0.6, color: new THREE.Color(0x00bb00) },
] as const;

const [w, h] = dim.modelSizes.hitBar;

export function createHitBar() {
  const retval = new THREE.Sprite(
    new THREE.SpriteMaterial({ color: new THREE.Color(barColors.at(-1)!.color), opacity: 0 }),
  );
  retval.scale.set(w, h, 1);
  retval.translateY(h); // make the hitBar float above its position
  retval.name = 'hitBar';
  return retval;
}

export function updateHitBar(obj: THREE.Object3D, fraction: number) {
  const barObj = obj.getObjectByName('hitBar');
  if (!barObj || !(barObj instanceof THREE.Sprite)) {
    return;
  }

  if (fraction <= 0) {
    barObj.removeFromParent();
    return;
  }

  barObj.scale.x = w * fraction;
  setColor(fraction, barObj.material.color);

  // make the hit bar visible
  barObj.material.opacity = 1;
}

function setColor(fraction: number, target: THREE.Color): void {
  if (fraction <= barColors[0].from) {
    target.copy(barColors[0].color);
    return;
  }

  const firstIndex = barColors.findLastIndex((c) => c.from <= fraction);

  const firstColor = barColors[firstIndex]!;
  target.copy(firstColor.color);

  const secondColor = barColors[firstIndex + 1];
  if (!secondColor) return;

  const a = firstColor.from;
  const b = secondColor.from;
  target.lerp(secondColor.color, (fraction - a) / (b - a));
}
