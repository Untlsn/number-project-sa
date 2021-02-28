import { State } from "store";
import {StateToProps} from "./connection";

export interface NumbersInputsProps extends StateToProps{
  storeState: State
}
