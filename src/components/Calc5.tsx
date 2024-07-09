// Jul 9, 2024
// Copy + Pasted from Calc4
// Making polish things

import { useState } from 'react';
import '../styles/App.css';

export default function CalculatorFive() {
  const [input, setInput] = useState('');

  const [display, setDisplay] = useState('');

  const evaluate = (input: string) => {
    if (input.includes('+')) {
      const array = input.split('+');

      const solution = parseFloat(array[0]) + parseFloat(array[1]);
      const final = solution.toString();

      setInput(final);
      setDisplay(input + '=' + final);
    } else if (input.includes('-')) {
      const array = input.split('-');

      const solution = parseFloat(array[0]) - parseFloat(array[1]);
      const final = solution.toString();

      setInput(final);
      setDisplay(input + '=' + final);
    } else if (input.includes('*')) {
      const array = input.split('*');

      const solution = parseFloat(array[0]) * parseFloat(array[1]);
      const final = solution.toString();

      setInput(final);
      setDisplay(input + '=' + final);
    } else if (input.includes('/')) {
      const array = input.split('/');

      const solution = parseFloat(array[0]) / parseFloat(array[1]);
      const final = solution.toString();

      setInput(final);
      setDisplay(input + '=' + final);
    } else if (input.includes('%')) {
      const array = input.split('%');

      const solution = parseFloat(array[0]) % parseFloat(array[1]);
      const final = solution.toString();

      setInput(final);
      setDisplay(input + '=' + final);
    }
  };

  const onClick = (value: string) => {
    if (value === 'AC') {
      setInput(' ');
      setDisplay(' ');
    } else if (value === '=') {
      evaluate(input);
    } else if (value === '?') {
      setInput('?');
      setDisplay(' ');
      alert(
        "Congrats! You've found the first clue. If you'd like to continue on this journey, navigate to the console. Thanks!"
      );
      console.log(
        'Welcome to the console! Glad to see you made it here, navigate to this link for your next clue: https://www.google.com/search?q=potatoes&oq=potatoes&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyCggBEC4YsQMYgAQyBwgCEAAYgAQyCggDEAAYsQMYgAQyCggEEAAYsQMYgAQyCggFEAAYsQMYgAQyBwgGEAAYgAQyBggHEEUYQdIBCDEzMzBqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8'
      );
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="window">
          <p>{input}</p>
          <p style={{ fontSize: 10 }}>{display}</p>
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
    </>
  );
}
