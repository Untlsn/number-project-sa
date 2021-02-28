import React from 'react';
import { mapStateToProps } from './connection'
import {connect} from "react-redux";



const NumbersInputs = () => {
  return (
    <div />
  );
};

export default connect(mapStateToProps, {})(NumbersInputs);
