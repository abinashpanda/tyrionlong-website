export const images = [
  require('images/sap-1.png'),
  require('images/sap-2.png'),
  require('images/crypto.png'),
  require('images/prodios-1.png'),
  require('images/lms-1.png'),
  require('images/indshine-1.png'),
  require('images/indshine-2.png'),
  require('images/somras.png'),
  require('images/bocs-1.png'),
  require('images/bocs-2.png'),
  require('images/prodios-2.png'),
  require('images/prodios-3.png'),
  require('images/prodios-4.png'),
  require('images/prodios-5.png'),
  require('images/prodios-6.png'),
  require('images/prodios-7.png'),
  require('images/prodios-8.png'),
  require('images/sap-3.png'),
]

export function getAspectRatio(image: HTMLImageElement) {
  const naturalWidth = image.naturalWidth ?? 0
  const naturalHeight = image.naturalHeight ?? 0
  return naturalWidth / naturalHeight
}
