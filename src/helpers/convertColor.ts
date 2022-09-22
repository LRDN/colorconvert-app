import type { Colord } from 'colord'
import { colord, extend } from 'colord'
import hwbPlugin from 'colord/plugins/hwb'
import lchPlugin from 'colord/plugins/lch'
import cmykPlugin from 'colord/plugins/cmyk'
import namesPlugin from 'colord/plugins/names'

extend([cmykPlugin, hwbPlugin, lchPlugin, namesPlugin])

const convertColor = (color: string | Colord) => {
  if (typeof color === 'string') color = colord(color)

  return {
    hex: color.toHex(),
    rgb: color.toRgbString(),
    hsl: color.toHslString(),
    hwb: color.toHwbString(),
    cmyk: color.toCmykString(),
    lch: color.toLchString(),
    css: color.toName() || '~' + color.toName({ closest: true }),
  }
}

export default convertColor
