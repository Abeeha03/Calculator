import { useState } from "react";
import "../Calculator.css";

function Calculator1() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => setDisplay(display + value);
  const calculateResult = () => setDisplay(eval(display));
  const clearDisplay = () => setDisplay("");

  return (
    <div className="calculator pink">
      <input type="text" value={display} readOnly />
      <div className="buttons">
        {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "0"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        <button onClick={calculateResult}>=</button>
        <button onClick={clearDisplay} className="clear">C</button>
      </div>
    </div>
  );
}

export default Calculator1;
