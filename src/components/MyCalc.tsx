// Jul 8, 2024
// attempted rewriting Calculator.tsx from memory

import { useState } from 'react';
import '../styles/App.css';

export default function MyCalc() {
  const [input, setInput] = useState('');

  const handleClick = (value: string) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === '=') {
      calculate();
    } else {
      setInput(input + value);
    }
  };

  const calculate = () => {
    try {
      const solution = eval(input);
      setInput(solution);
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="window">
        <p>{input}</p>
      </div>
      <div>
        <button className="operation-button" onClick={() => handleClick('AC')}>
          AC
        </button>
        <button onClick={() => handleClick('?')}>?</button>
        <button className="operation-button" onClick={() => handleClick('%')}>
          %
        </button>
        <button className="operation-button" onClick={() => handleClick('/')}>
          /
        </button>
      </div>
      <div>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="operation-button" onClick={() => handleClick('*')}>
          *
        </button>
      </div>
      <div>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="operation-button" onClick={() => handleClick('-')}>
          -
        </button>
      </div>
      <div>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="operation-button" onClick={() => handleClick('+')}>
          +
        </button>
      </div>
      <div>
        <button className="long-button" onClick={() => handleClick('0')}>
          0
        </button>
        <button className="operation-button" onClick={() => handleClick('.')}>
          .
        </button>
        <button className="operation-button" onClick={() => handleClick('=')}>
          =
        </button>
      </div>
    </div>
  );
}
