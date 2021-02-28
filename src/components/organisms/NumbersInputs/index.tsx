import React, {ChangeEvent} from 'react';
import {mapDispatchToProps, mapStateToProps} from './connection'
import {connect} from "react-redux";
import * as S from './style'
import Input from "components/atoms/Input";
import type {NumbersInputsProps} from "./props";
import type { Actions } from "store";
import * as R from 'ramda'
import TranslatorInput from "components/molecules/TranslatorInput";

const lastAsNumber = R.pipe<string, string, number>(R.last, Number)

const NumbersInputs = ({ storeState: { numberPartials }, storeDispatch }: NumbersInputsProps) => {
  const change = (type: Actions.MiniType) => ({ target }: ChangeEvent<HTMLInputElement>) => {
    storeDispatch.change(type, lastAsNumber(target.value))
  }

  const inputs = [
    {
      value: numberPartials.k,
      setValue: change('k')
    },
    {
      value: numberPartials.h,
      setValue: change('h')
    },
    {
      value: numberPartials.d,
      setValue: change('d')
    },
    {
      value: numberPartials.u,
      setValue: change('u')
    }
  ]

  return (
    <S.Wrapper>
      {
        inputs.map((data, key) => (
          <S.TwoLabel key={key}>
            <Input text="Liczbowo" parentData={data} />
            <TranslatorInput text="Słownie" value={data.value} part={3 - key} />
          </S.TwoLabel>
        ))
      }
    </S.Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NumbersInputs);
