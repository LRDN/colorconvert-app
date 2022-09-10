const clampNumber = (value: number, min: number, max: number) => {
  return value < min ? min : value > max ? max : value
}

export default clampNumber
