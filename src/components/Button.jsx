import React from 'react';
import './Button.css';

export default (props) => 
  <button 
    onClick={e => props.click(props.label)}
    className={`
      button
      ${props.operation ? 'operation' : ''}
      ${props.twoColumn ? 'twoColumn' : ''}
      ${props.threeColumn ? 'threeColumn' : ''}
    `}
  >
    {props.label}
  </button>