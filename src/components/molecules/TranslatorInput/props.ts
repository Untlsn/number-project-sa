export interface InputTranslator extends TextProps {
  text: string,
  value: number
  part?: number
}

export interface TextProps {
  isFull?: boolean
}
