import {Actions, State} from "store";
import {Dispatch} from "redux";
import {NumberPartials} from "./state";


export const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
  storeDispatch: {
    change: (type, payload) => dispatch(Actions.change(type, payload)),
    changeAll: (payload) => dispatch(Actions.changeAll(payload))
  }
})
export type DispatchToProps = {
  storeDispatch: {
    change: (type: Actions.MiniType, payload: number) => void,
    changeAll: (payload: NumberPartials) => void
  }
}

export type StateToProps = {storeState: State}
export const mapStateToProps = (storeState: State): StateToProps => ({ storeState })
