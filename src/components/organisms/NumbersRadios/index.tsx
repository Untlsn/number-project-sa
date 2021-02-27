import React from 'react';
import { GroupBoxRadios } from "components/molecules";
import * as S from './style'

const NumbersRadios = () => {
  return (
    <S.Wrapper>
      <GroupBoxRadios name="Tysiące" zerosCount={3} />
      <GroupBoxRadios name="Setki" zerosCount={2} />
      <GroupBoxRadios name="Dziesiątki" zerosCount={1} />
      <GroupBoxRadios name="Jednostki" zerosCount={0} />
    </S.Wrapper>
  );
};

export default NumbersRadios;
