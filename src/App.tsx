import React from 'react';
import { NumbersRadios, NumbersInputs } from 'components/organisms'
import * as S from './App.style'

function App() {
  return (
    <S.MainGrid>
      <S.LeftGrid>
        <NumbersRadios />
        <NumbersInputs />
      </S.LeftGrid>
      <S.RightGrid />
    </S.MainGrid>
  );
}

export default App;
