import React, {useEffect} from 'react';
import { NumbersRadios, NumbersInputs, FullNumberInput } from 'components/organisms'
import * as S from './App.style'
import { Provider } from "react-redux";
import { store } from "store";

function App() {
  useEffect(() => {
    document.title = 'Number partier'
  }, [])

  return (
    <Provider store={store}>
      <S.MainGrid>
        <S.LeftGrid>
          <NumbersRadios />
          <NumbersInputs />
        </S.LeftGrid>
        <S.RightGrid>
          <FullNumberInput />
        </S.RightGrid>
      </S.MainGrid>
    </Provider>
  );
}

export default App;
