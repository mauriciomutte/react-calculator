import React, { Component } from 'react';

import * as S from './styled';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};

const calculation = (num1, num2, op) => {
  switch (op) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    case '/':
      return num1 / num2;
    
    default:
      break;
  }
}

export default class Calculator extends Component {
  state = { ...initialState }

  constructor(props) {
    super(props);

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory = () => {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    if(this.state.current === 0) {
      this.setState({ 
        operation,
        clearDisplay: true,
        current: 1 
      });
    } else {
      const {operation: op, values} = this.state;
      const equals = operation === '=';

      values[0] = calculation(values[0], values[1], op);
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      });
    }
  }

  addDigit(n) {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return
    }

    let {displayValue, clearDisplay, current, values} = this.state;

    clearDisplay = displayValue === '0' || clearDisplay;
    displayValue = (clearDisplay ? '' : displayValue) + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      values[current] = newValue;
      this.setState({ values });
    }
  }

  render() {
    return (
      <S.Calculator>
        <Display value={this.state.displayValue}/>
        <Button label="AC" click={this.clearMemory} column="3"/>
        <Button label="/" click={this.setOperation} operation/>
        <Button label="7" click={this.addDigit}/>
        <Button label="8" click={this.addDigit}/>
        <Button label="9" click={this.addDigit}/>
        <Button label="*" click={this.setOperation} operation/>
        <Button label="4" click={this.addDigit}/>
        <Button label="5" click={this.addDigit}/>
        <Button label="6" click={this.addDigit}/>
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.addDigit}/>
        <Button label="2" click={this.addDigit}/>
        <Button label="3" click={this.addDigit}/>
        <Button label="+" click={this.setOperation} operation/>
        <Button label="0" click={this.addDigit} column="2"/>
        <Button label="." click={this.addDigit}/>
        <Button label="=" click={this.setOperation} operation/>
      </S.Calculator>
    );
  }
}
