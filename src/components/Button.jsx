import React from 'react';
import { Button } from './styled';

export default (props) => 
  <Button {...props} onClick = {e => props.click(props.label)}>
    {props.label}
  </Button>