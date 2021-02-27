import React, {useState} from 'react';
import {RadioButtonProps} from "./props";
import * as S from './style'
import * as H from './helpers'


const RadioButton = ({ name, zerosCount, num: key }: RadioButtonProps) => {
  const value = H.getInputValue(key, zerosCount)

  const [ radioCheck, setRadioCheck ] = useState(false)
  const changeCheck = () => setRadioCheck(old => !old)

  return (
    <S.Wrapper onClick={changeCheck}>
      <S.Radio type="radio" name={name} value={value} checked={radioCheck}/>
      <span>{ value }</span>
    </S.Wrapper>
  );
};

export default RadioButton;
