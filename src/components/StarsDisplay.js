import React from 'react';
import { utils } from '../helpers/Utils';

export const StarsDisplay = props => (
    <>
      {utils.range(1, props.stars).map(starId => 
        <div key={starId} className="star" />
    )}
    </>
  )