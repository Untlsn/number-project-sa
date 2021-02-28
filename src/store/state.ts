export interface State {
  numberPartials: NumberPartials
}

export interface NumberPartials {
  k: number,
  h: number,
  d: number,
  u: number
}
export type Partials = 'k' | 'h' | 'd' | 'u'


export const initState = {
  numberPartials: {
    k: 0,
    h: 0,
    d: 0,
    u: 0
  }
}
