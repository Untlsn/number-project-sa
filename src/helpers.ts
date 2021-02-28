import { Actions } from 'store'
import * as R from "ramda";
import {trim} from "ramda";

const words: Record<Actions.MiniType | 'du', string[]> = {
  k: [
    '',
    'tysiąc',
    'dwa tysiące',
    'trzy tysiące',
    'cztery tysiące',
    'pięc tysięcy',
    'sześć tysięcy',
    'siedem tysięcy',
    'osiem tysięcy',
    'dziewięc tysięcy'
  ],
  h: [
    '',
    'sto',
    'dwieście',
    'trzystka',
    'czterysta',
    'pięćset',
    'sześćset',
    'siedemset',
    'osiemset',
    'dziewięćset'
  ],
  d: [
    '',
    'dziesięć',
    'dwadzieścia',
    'trzydzieści',
    'czterdzieści',
    'pięćdziesiąt',
    'sześcdziesiąt',
    'siedemdziesiąt',
    'osiemdziesiąt',
    'dziewięćdziesiąt'
  ],
  u: [
    '',
    'jeden',
    'dwa',
    'trzy',
    'cztery',
    'pięc',
    'sześć',
    'siedem',
    'osiem',
    'dziewięc'
  ],
  du: [
    'dziesięć',
    'jedenascie',
    'dwanaście',
    'trzynaście',
    'czternascie',
    'piętnaście',
    'szesnaście',
    'siedemnascie',
    'osiemnaście',
    'dziewiętnaście'
  ]
}

export const allToWords = (data: number) => {
  const parts = R.pipe<number, string, string[], number[], number[]>(
    R.toString, R.split(''), R.map(Number), R.reverse
  )(data)

  const inWords = parts[1] == 1 && parts[0] != 0
    ? [ words.du[parts[0]] ]
    : [
      words.u[parts[0]] ?? '',
      words.d[parts[1]] ?? ''
    ]

  return inWords.concat([
    words.h[parts[2]] ?? '',
    words.k[parts[3]] ?? ''
  ]).reverse().join(' ')
}

export const toWords = (num: number, part: number) => [
  words.u[num],
  words.d[num],
  words.h[num],
  words.k[num]
][part]
