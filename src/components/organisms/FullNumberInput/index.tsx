import React, {ChangeEvent} from 'react';
import { FullNumberInputProps } from "./props";
import {combinePartials, unCombineText} from "./helpers";
import { mapStateToProps, mapDispatchToProps } from './connect'
import { connect } from "react-redux";
import Input from "../../atoms/Input";
import TranslatorInput from "../../molecules/TranslatorInput";


const FullNumberInput = ({ storeDispatch: { changeAll }, storeState: { numberPartials } }: FullNumberInputProps) => {

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeAll(
      unCombineText(
        event.target.value
      )
    )
  }

  const inputValue = {
    value: combinePartials(numberPartials),
    setValue: inputChange
  }

  return (
    <div>
      <Input text="Wpisz liczbe" parentData={inputValue} />
      <TranslatorInput text="Słownie" value={inputValue.value} isFull/>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FullNumberInput);
