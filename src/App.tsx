// import Calculator from './components/Calculator';
import MyCalc from './components/MyCalc';
// import ManualCalc from './components/ManualCalc';

import Image from './assets/calc_favicon.png';

export default function App() {
  return (
    <>
      <div className="nav">
        <p>vals calc</p>
        <img src={Image} className="image" />
      </div>

      <div className="calc-container">
        {/* <Calculator /> */}
        <MyCalc />
        {/* <ManualCalc /> */}
      </div>
    </>
  );
}
