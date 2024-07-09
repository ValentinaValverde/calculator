import './styles/App.css';
import CalculatorFive from './components/Calc5';
import Image from './assets/calc_favicon_filled.png';

export default function App() {
  return (
    <>
      <div className="nav">
        <p>vals calc</p>
        <img src={Image} className="image" />
      </div>

      <div className="calc-container">
        <CalculatorFive />
      </div>
    </>
  );
}
