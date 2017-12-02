import React from 'react';
var actual;

class Calcu extends React.Component {
  constructor(props) {
    super(props);
    
	this.state = {
      numeros: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    
	if (e.target.simbolo === 'delete') {
      actual = [...this.state.numeros];
      actual.pop();
      this.setState({ numeros: actual });
    } 
	else if (e.target.simbolo === '=') {
	  var numeros2;
      numeros2 = [...this.state.numeros];
      const operadores = numeros2.filter(n => (n === '+' || n === '-' || n === 'x' || n === '/')).slice(0);
      const op1 = parseFloat(numeros2.slice(0, numeros2.indexOf(operadores[0])).join(''));
      const op2 = parseFloat(numeros2.slice(numeros2.indexOf(operadores[0]) + 1, numeros2.length).join(''));
      
	  switch (operadores[0]) {
        case '+':
          this.setState({ numeros: [op1 + op2] });
          break;
        case '-':
          this.setState({ numeros: [op1 - op2] });
          break;
        case 'x':
          this.setState({ numeros: [op1 * op2] });
          break;
        case '/':
          this.setState({ numeros: [op1 / op2] });
          break;
        default:
          break;
      }
    }
	else {
      actual = [...this.state.numeros, (e.target.simbolo).toString()];
      this.setState({ numeros: actual });
    } 
  }

  render() {
    return (
      <div>
        <div>
          <button simbolo="delete" onClick={this.handleClick}>DELETE</button>
          <button simbolo="/" onClick={this.handleClick}>/</button>
        </div>
		<div>
          <button simbolo="1" onClick={this.handleClick}>1</button>
          <button simbolo="2" onClick={this.handleClick}>2</button>
          <button simbolo="3" onClick={this.handleClick}>3</button>
		  <button simbolo="4" onClick={this.handleClick}>4</button>
          <button simbolo="5" onClick={this.handleClick}>5</button>
          <button simbolo="6" onClick={this.handleClick}>6</button>
          
        </div>
        <div>
          <button simbolo="7" onClick={this.handleClick}>7</button>
          <button simbolo="8" onClick={this.handleClick}>8</button>
          <button simbolo="9" onClick={this.handleClick}>9</button>
		  <button simbolo="0" onClick={this.handleClick}>0</button>
       </div>
        <div >
		  <button simbolo="+" onClick={this.handleClick}>+</button>
          <button simbolo="x" onClick={this.handleClick}>x</button>
          <button simbolo="-" onClick={this.handleClick}>-</button>
		  <button simbolo="." onClick={this.handleClick}>.</button>
          <button simbolo="=" onClick={this.handleClick}>= </button>
        </div>
      </div>
    );
  }
}
