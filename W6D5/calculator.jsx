import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '', result: 0 };
  }

  setNum1(e) {
    this.setState({ num1: e.currentTarget.value });
  }

  setNum2(e) {
    this.setState({ num2: e.currentTarget.value });
  }

  add() {
    this.setState({ result: this.num1() + this.num2() });
  }

  subtract() {
    this.setState({ result: this.num1() - this.num2() });
  }

  multiply() {
    this.setState({ result: this.num1() * this.num2() });
  }

  divide() {
    this.setState({ result: this.num1() / this.num2() });
  }

  num1() {
    return parseInt(this.state.num1);
  }

  num2() {
    return parseInt(this.state.num2);
  }

  clear() {
    this.setState({ num1: '', num2: '', result: 0 });
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input
          type="text"
          onChange={this.setNum1.bind(this)}
          value={num1}>
        </input>
        <input
          type="text"
          onChange={this.setNum2.bind(this)}
          value={num2}>
        </input>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.subtract.bind(this)}>-</button>
        <button onClick={this.multiply.bind(this)}>*</button>
        <button onClick={this.divide.bind(this)}>/</button>
        <button onClick={this.clear.bind(this)}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
