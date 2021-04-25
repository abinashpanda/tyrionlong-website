uniform sampler2D uCurrentImage;
uniform sampler2D uNextImage;
uniform sampler2D uDisp;
uniform float uProg;
uniform bool uToNext;

varying vec2 vUv;
varying float vBump;

vec3 getColorWithBump(sampler2D image, vec2 uv, float bump) {
  return vec3(
    texture2D(image, uv - bump).r,
    texture2D(image, uv).g,
    texture2D(image, uv + bump).b
  );
}

void main() {
  vec4 disp = texture2D(uDisp, vUv);
  float wipe = step(uToNext ? 1.0 - vUv.x : vUv.x, uProg);

  vec2 dispUv = vUv - vec2(disp.r * uProg, 0.);
  vec3 currentColor = getColorWithBump(uCurrentImage, dispUv, vBump);

  float scale = uToNext ? 0.7 + 0.3 * uProg : 0.3 + 0.7 * uProg;

  vec3 nextColor = getColorWithBump(
    uNextImage,
    vUv * scale + vec2(0.15) * ( 1. - uProg),
    vBump
  );

  vec3 color = mix(currentColor, nextColor, wipe);
  gl_FragColor = vec4(color, 1.);
}