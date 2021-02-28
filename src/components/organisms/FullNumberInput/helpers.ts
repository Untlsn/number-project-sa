import {Partials} from "store";
import {reverse} from "ramda";

type ParNum = Record<Partials, number>

export const combinePartials = ({ k, h, d, u }: ParNum) => {
  return k*1000 + h*100 + d*10 + u
}

export const unCombineText = (text: string) => {
  const data = reverse(
    text.split('').map(Number)
  )

  return {
    k: data[3] ?? 0,
    h: data[2] ?? 0,
    d: data[1] ?? 0,
    u: data[0] ?? 0,
  }
}
