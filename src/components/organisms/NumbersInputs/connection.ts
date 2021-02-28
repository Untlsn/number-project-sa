import {State} from "store";

export type StateToProps = {storeState: State}
export const mapStateToProps = (storeState: State): StateToProps => ({ storeState })
