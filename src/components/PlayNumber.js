import React from 'react';
import { colors } from '../helpers/colors';

export const PlayNumber = props => (
    <button 
    className="number" 
    style={{backgroundColor: colors[props.status]}}
    onClick={() => console.log("Number:", props.number, "clicked")}>
      {props.number}
    </button>
  )