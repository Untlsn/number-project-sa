import React from 'react';
import {GroupBoxRadiosProps} from "./props";
import {range} from "ramda";
import RadioButton from "components/atoms/RadioButton";

const GroupBoxRadios = (props: GroupBoxRadiosProps) => {
  const keys = range(0, 10)
  return (
    <div>
      <p>{ props.name }</p>
      {
        keys.map((key) => <RadioButton key={key} num={key} { ...props } />)
      }
    </div>
  );
};

export default GroupBoxRadios;
