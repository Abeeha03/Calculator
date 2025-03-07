import { useState } from "react";
import "../Calculator.css";

function Calculator3() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => setDisplay(display + value);
  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString()); // Convert result to string to avoid errors
    } catch {
      setDisplay("Error");
    }
  };
  const clearDisplay = () => setDisplay("");

  return (
    <div className="calculator blue">
      <input type="text" value={display} readOnly />
      <div className="buttons">
        {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "/", "="].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "=" ? calculateResult() : handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
        <button onClick={clearDisplay} className="clear">C</button>
      </div>
    </div>
  );
}

export default Calculator3;
