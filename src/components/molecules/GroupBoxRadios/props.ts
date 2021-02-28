import {State} from "store";

export interface GroupBoxRadiosProps {
  name: string,
  zerosCount: number
  type: keyof State["numberPartials"]
}
