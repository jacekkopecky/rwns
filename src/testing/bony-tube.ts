import * as THREE from 'three';

export interface BonyTubeSizeOptions {
  length: number;
  radius: number;
  segmentsPerBone: number;
  sides: number;
  boneCount: number;
  boneOffset: number;
  openEnded?: boolean;
}

// adapted from https://threejs.org/docs/scenes/bones-browser.html

const _vector = new THREE.Vector3();
export function createBonyTubeGeometry(opts: BonyTubeSizeOptions) {
  const geometry = new THREE.CylinderGeometry(
    opts.radius,
    opts.radius,
    opts.length,
    opts.sides,
    opts.segmentsPerBone * opts.boneCount,
    opts.openEnded,
  )
    .translate(0, opts.length / 2, 0)
    .rotateY(Math.PI / opts.sides);

  const segmentLength = opts.length / (opts.boneCount - 1);

  const skinIndices = [];
  const skinWeights = [];

  const position = geometry.attributes.position!;
  for (let i = 0; i < position.count; i++) {
    const y = _vector.fromBufferAttribute(position, i).y;

    const boneIndex = Math.floor(y / segmentLength);
    const topWeight = (y - boneIndex * segmentLength) / segmentLength;

    skinIndices.push(opts.boneOffset + boneIndex, opts.boneOffset + boneIndex + 1, 0, 0);
    skinWeights.push(1 - topWeight, topWeight, 0, 0);
  }

  geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

  return geometry;
}
