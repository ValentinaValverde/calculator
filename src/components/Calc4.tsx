// Jul 9, 2024
// Only thing I asked ChatGPT for was to find the .includes method
// Progress! Near success

import { useState } from 'react';
import '../styles/App.css';

export default function CalculatorFour() {
  const [input, setInput] = useState('');

  const evaluate = (input: string) => {
    if (input.includes('+')) {
      const array = input.split('+');

      const num1 = parseFloat(array[0]);
      const num2 = parseFloat(array[1]);

      const solution = num1 + num2;
      const final = solution.toString();

      setInput(final);
    } else if (input.includes('-')) {
      const array = input.split('-');

      const num1 = parseFloat(array[0]);
      const num2 = parseFloat(array[1]);

      const solution = num1 - num2;
      const final = solution.toString();

      setInput(final);
    } else if (input.includes('*')) {
      const array = input.split('*');

      const num1 = parseFloat(array[0]);
      const num2 = parseFloat(array[1]);

      const solution = num1 * num2;
      const final = solution.toString();

      setInput(final);
    } else if (input.includes('/')) {
      const array = input.split('/');

      const num1 = parseFloat(array[0]);
      const num2 = parseFloat(array[1]);

      const solution = num1 / num2;
      const final = solution.toString();

      setInput(final);
    } else if (input.includes('%')) {
      const array = input.split('%');

      const num1 = parseFloat(array[0]);
      const num2 = parseFloat(array[1]);

      const solution = num1 % num2;
      const final = solution.toString();

      setInput(final);
    }
  };

  const onClick = (value: string) => {
    if (value === 'AC') {
      setInput(' ');
    } else if (value === '=') {
      evaluate(input);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="window">
        <p>{input}</p>
      </div>
      <div>
        <button onClick={() => onClick('AC')}>AC</button>
        <button onClick={() => onClick('?')}>?</button>
        <button onClick={() => onClick('%')}>%</button>
        <button onClick={() => onClick('/')}>/</button>
      </div>
      <div>
        <button onClick={() => onClick('7')}>7</button>
        <button onClick={() => onClick('8')}>8</button>
        <button onClick={() => onClick('9')}>9</button>
        <button onClick={() => onClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => onClick('4')}>4</button>
        <button onClick={() => onClick('5')}>5</button>
        <button onClick={() => onClick('6')}>6</button>
        <button onClick={() => onClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => onClick('1')}>1</button>
        <button onClick={() => onClick('2')}>2</button>
        <button onClick={() => onClick('3')}>3</button>
        <button onClick={() => onClick('+')}>+</button>
      </div>
      <div>
        <button className="long-button" onClick={() => onClick('0')}>
          0
        </button>
        <button onClick={() => onClick('.')}>.</button>
        <button onClick={() => onClick('=')}>=</button>
      </div>
    </div>
  );
}
