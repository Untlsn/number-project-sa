import React from 'react';
import { InputTranslator } from './props'
import { allToWords, toWords } from 'helpers'
import * as S from "./style";

const TranslatorInput = ({ text, value, part, isFull }: InputTranslator) => {
  return (
    <div>
      <p>{ text }</p>
      <S.Text isFull={isFull}>{ part ? toWords(value, part) : allToWords(value) }</S.Text>
    </div>
  );
};

export default TranslatorInput;
