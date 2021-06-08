import React from 'react';

export const PlayNumber = props => (
    <button className="number" onClick={() => console.log("Number:", props.number, "clicked")}>
      {props.number}
    </button>
  )