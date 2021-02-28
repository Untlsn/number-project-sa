import React, {ChangeEvent} from 'react';
import { FullNumberInputProps } from "./props";
import {combinePartials, unCombineText} from "./helpers";
import { mapStateToProps, mapDispatchToProps } from './connect'
import { connect } from "react-redux";



const FullNumberInput = ({ storeDispatch: { changeAll }, storeState: { numberPartials } }: FullNumberInputProps) => {

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeAll(
      unCombineText(
        event.target.value
      )
    )
  }

  return (
    <div>
      <p>Wpisz liczbe</p>
      <input type="text" value={combinePartials(numberPartials) || ''} onChange={inputChange}/>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FullNumberInput);
