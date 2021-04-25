/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.glsl' {
  const value: string
  export default value
}

namespace JSX {
  interface IntrinsicElements {
    imageShaderMaterial: any
  }
}
