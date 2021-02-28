import React from 'react';
import {RadioButtonProps} from "./props";
import { connect } from "react-redux";
import * as S from './style'
import * as H from './helpers'
import {mapDispatchToProps, mapStateToProps} from "./connection";
import { equals } from 'ramda'

const RadioButton = ({ name, zerosCount, num: key, type, storeDispatch: { change }, storeState }: RadioButtonProps) => {

  const value = H.getInputValue(key, zerosCount)
  const isChecked = (data: number) => equals(key, data)
  const changeCheck = () => change(type, key)

  return (
    <S.Wrapper onClick={changeCheck}>
      <S.Radio type="radio" name={name} value={value} checked={isChecked(storeState.numberPartials[type])} readOnly />
      <span>{ value }</span>
    </S.Wrapper>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(RadioButton);
