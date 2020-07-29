export interface P5Font {
  pInst?: any
  font: any

  textBounds: (line: string, x: number, y: number, fontSize?: number, options?: object) => object
  textToPoints: (txt: string, x: number, y: number, fontSize: number, options?: object) => any[]
}

