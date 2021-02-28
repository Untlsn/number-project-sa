import React from 'react';
import { GroupBoxRadios } from "components/molecules";
import * as S from './style'

const NumbersRadios = () => {
  return (
    <S.Wrapper>
      <GroupBoxRadios name="Tysiące" zerosCount={3} type="k" />
      <GroupBoxRadios name="Setki" zerosCount={2} type="h" />
      <GroupBoxRadios name="Dziesiątki" zerosCount={1} type="d" />
      <GroupBoxRadios name="Jednostki" zerosCount={0} type="u" />
    </S.Wrapper>
  );
};

export default NumbersRadios;
