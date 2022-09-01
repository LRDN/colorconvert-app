import { colord, extend } from 'colord'
import hwbPlugin from 'colord/plugins/hwb'
import lchPlugin from 'colord/plugins/lch'
import cmykPlugin from 'colord/plugins/cmyk'
import namesPlugin from 'colord/plugins/names'

extend([cmykPlugin, hwbPlugin, lchPlugin, namesPlugin])

const colorModels = {
  hex: {
    regex: /^#?[0-9a-f]{0,8}$/i,
    converter: (color: string) => colord(color).toHex(),
  },
  rgb: {
    regex: /^r?g?b?a?\(?[0-9.,\s]*\)?$/i,
    converter: (color: string) => colord(color).toRgbString(),
  },
  hsl: {
    regex: /^h?s?l?a?\(?[0-9%.,\s]*\)?$/i,
    converter: (color: string) => colord(color).toHslString(),
  },
  hwb: {
    regex: /^h?w?b?\(?[0-9%./\s]*\)?$/i,
    converter: (color: string) => colord(color).toHwbString(),
  },
  cmyk: {
    regex: /^d?e?v?i?c?e?-?c?m?y?k?\(?[0-9%./\s]*\)?$/i,
    converter: (color: string) => colord(color).toCmykString(),
  },
  lch: {
    regex: /^l?c?h?\(?[0-9%./\s]*\)?$/i,
    converter: (color: string) => colord(color).toLchString(),
  },
  css: {
    regex: /^~?[a-z]*$/i,
    converter: (color: string) =>
      colord(color).toName() || '~' + colord(color).toName({ closest: true }),
  },
}

export default colorModels
