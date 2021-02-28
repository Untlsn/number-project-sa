import React, {ChangeEvent} from 'react';
import {InputProps} from "./props";

const Input = ({ text, parentData: { value, setValue } }: InputProps) => {
  if(typeof value == 'string' && value.includes(' ')) {
    value = value.trim()
  }

  return (
    <div>
      <p>{ text }</p>
      <input type="text" value={value || ''} onChange={setValue} />
    </div>
  );
};

export default Input;
export * from './props'
