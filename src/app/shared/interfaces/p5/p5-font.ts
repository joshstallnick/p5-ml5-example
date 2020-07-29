
export interface P5Font {
  pInst?: any
  font: any

  textBounds: TextBoundsFn
  textToPoints: TextToPointsFn
}

type TextBoundsFn =
  ((line: string, x: number, y: number) => object) &
  ((line: string, x: number, y: number, fontSize: number) => object) &
  ((line: string, x: number, y: number, fontSize: number, options: object) => object) &
  ((line: string, x: number, y: number, options: object) => object)

type TextToPointsFn =
  ((txt: string, x: number, y: number, fontSize: number) => any[]) &
  ((txt: string, x: number, y: number, fontSize: number, options: object) => any[])
