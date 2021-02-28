const R = require('ramda')

const words = {
  k: [
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
    'dziesięc',
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

const toWords = (data) => {
  const parts = R.pipe(
    R.toString, R.split(''), R.map(Number), R.map(R.add(-1)), R.reverse
  )(data)

  const inWords = parts[1] == 0
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

console.log(
  toWords(12, 1)
)
