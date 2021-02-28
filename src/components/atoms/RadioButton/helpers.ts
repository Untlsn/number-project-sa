export const getInputValue = (key: number, zerosCount: number) => key == 0
  ? '0'
  : `${key}${'0'.repeat(zerosCount)}`

