#pragma glslify: noise = require(glsl-noise/simplex/2d)

uniform float uTime;
uniform float uBumpFrequency;
uniform float uBumpStrength;

varying float vBump;
varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.);

  vec2 noisePos = vec2(modelPosition.x + uBumpFrequency * uTime, modelPosition.y);
  modelPosition.z = noise(noisePos) * uBumpStrength * 5.;
  vBump = modelPosition.z / 5.;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  vUv = uv;

  gl_Position = projectedPosition;
}