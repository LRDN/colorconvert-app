import type { AnyColor } from 'colord'
import hwbPlugin from 'colord/plugins/hwb'
import lchPlugin from 'colord/plugins/lch'
import cmykPlugin from 'colord/plugins/cmyk'
import namesPlugin from 'colord/plugins/names'
import { Colord, colord, extend } from 'colord'

extend([cmykPlugin, hwbPlugin, lchPlugin, namesPlugin])

const convertColor = (color: AnyColor | Colord) => {
  if (!(color instanceof Colord)) {
    color = colord(color)
  }

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
