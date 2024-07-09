// Jul 8, 2024
// created by ChatGPT

import { useState } from 'react';
import '../styles/App.css';

export default function CalculatorOne() {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'AC') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      // Using eval here for simplicity; be cautious in production
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="window">
          <p id="main-num">{input}</p>
        </div>
        <div>
          <button
            className="operation-button"
            onClick={() => handleButtonClick('AC')}
          >
            AC
          </button>
          <button
            className="operation-button"
            onClick={() => handleButtonClick('?')}
          >
            ?
          </button>
          <button
            className="operation-button"
            onClick={() => handleButtonClick('%')}
          >
            %
          </button>
          <button
            className="operation-button"
            onClick={() => handleButtonClick('/')}
          >
            /
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button
            className="operation-button"
            onClick={() => handleButtonClick('*')}
          >
            *
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button
            className="operation-button"
            onClick={() => handleButtonClick('-')}
          >
            -
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button
            className="operation-button"
            onClick={() => handleButtonClick('+')}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="long-button"
            onClick={() => handleButtonClick('0')}
          >
            0
          </button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button
            className="operation-button"
            onClick={() => handleButtonClick('=')}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}
