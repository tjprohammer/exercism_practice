const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

const colorCode = (color: string): number => COLORS.indexOf(color)

export const decodedValue = ([x, y]: string[]): number => colorCode(x) * 10 + colorCode(y)