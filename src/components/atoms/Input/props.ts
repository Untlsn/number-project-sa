import {ChangeEvent} from "react";

export interface InputProps {
  text: string,
  parentData: ParentData
}

export interface ParentData {
  value: number | string,
  setValue: (event: ChangeEvent<HTMLInputElement>) => void
}
