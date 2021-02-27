import React from 'react';
import {GroupBoxRadiosProps} from "./props";
import {range} from "ramda";
import RadioButton from "components/atoms/RadioButton";

const GroupBoxRadios = ({ name, zerosCount }: GroupBoxRadiosProps) => {
  const keys = range(0, 10)
  return (
    <div>
      <p>{ name }</p>
      {
        keys.map((key) => <RadioButton key={key} num={key} name={name} zerosCount={zerosCount} />)
      }
    </div>
  );
};

export default GroupBoxRadios;
