import { State} from "store";
import {DispatchToProps, StateToProps} from "./connection";

export interface RadioButtonProps extends DispatchToProps, StateToProps{
  num: number,
  zerosCount: number,
  name: string,
  type: keyof State["numberPartials"],
}
