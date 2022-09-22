const colorPatterns = {
  hex: /^#[0-9a-f]{3,8}$/i,
  rgb: /^rgba?\([^)]+\)$/i,
  hsl: /^hsla?\([^)]+\)$/i,
  hwb: /^hwb\([^)]+\)$/i,
  cmyk: /^device-cmyk\([^)]+\)$/i,
  lch: /^lch\([^)]+\)$/i,
  css: /^[a-z]+$/i,
}

type ColorModel = keyof typeof colorPatterns

const matchColor = (color: string, model: ColorModel) => {
  return !!color.match(colorPatterns[model])
}

export type { ColorModel }
export default matchColor
