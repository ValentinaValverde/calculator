// Jul 8, 2024
// evaluate function was generated by ChatGPT
// bugs: decimal does not work, NaN thing, etc.

import { useState } from 'react';
import '../styles/App.css';

export default function CalculatorThree() {
  const [input, setInput] = useState('');

  const handleClick = (value: string) => {
    if (value === 'AC') {
      setInput(' ');
    } else if (value === '=') {
      evaluate();
    } else {
      setInput(input + value);
    }
  };

  const evaluate = () => {
    // let result = 'Error';
    try {
      // Splitting input based on operators +, -, *, /
      const numbersAndOperators = [];
      let currentNumber = '';

      // Iterate through each character in the input
      for (let i = 0; i < input.length; i++) {
        const char = input[i];

        // Check if the character is an operator
        if (char === '+' || char === '-' || char === '*' || char === '/') {
          // Push the current number to the array and reset currentNumber
          if (currentNumber !== '') {
            numbersAndOperators.push(currentNumber);
            currentNumber = '';
          }
          // Push the operator to the array
          numbersAndOperators.push(char);
        } else {
          // Append digit or decimal point to currentNumber
          currentNumber += char;
        }
      }

      // Push the last number to the array
      if (currentNumber !== '') {
        numbersAndOperators.push(currentNumber);
      }

      // Initialize result with the first number
      result = parseFloat(numbersAndOperators[0]);

      // Iterate through the array and perform operations
      for (let i = 1; i < numbersAndOperators.length; i += 2) {
        const operator = numbersAndOperators[i];
        const nextNumber = parseFloat(numbersAndOperators[i + 1]);

        switch (operator) {
          case '+':
            result += nextNumber;
            break;
          case '-':
            result -= nextNumber;
            break;
          case '*':
            result *= nextNumber;
            break;
          case '/':
            if (nextNumber === 0) {
              throw new Error('Division by zero');
            }
            result /= nextNumber;
            break;
          default:
            throw new Error('Invalid operator');
        }
      }

      result = result.toString(); // Convert result back to string
    } catch (error) {
      console.error(error);
    }

    setInput(result);
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
