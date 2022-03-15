import "./CalculatorProject1.css";
import { useState } from "react";

export default function Apps() {
  const [result, setresult] = useState("");

  function handClick(e) {
    setresult(result.concat(e.target.name));
  }

  function backspace() {
    setresult(result.slice(0, -1));
  }

  function clear() {
    setresult("");
  }

  function calculate() {
    try {
      setresult(eval(result).toString());
    } catch (error) {
      setresult("ERROR");
    }
  }

  return (
    <div className="App">
      <form>
        <input
          value={result}
          placeholder="Enter"
          //  ref={inputRef}
        />
      </form>

      <div className="keypad">
        <button id="clear" onClick={clear}>
          {" "}
          Clear
        </button>
        <button id="backspace" onClick={backspace}>
          C
        </button>
        <button name="+" onClick={handClick}>
          +
        </button>
        <button name="7" onClick={handClick}>
          7
        </button>
        <button name="8" onClick={handClick}>
          8
        </button>
        <button name="9" onClick={handClick}>
          9
        </button>
        <button name="-" onClick={handClick}>
          -
        </button>
        <button name="4" onClick={handClick}>
          4
        </button>
        <button name="5" onClick={handClick}>
          5
        </button>
        <button name="6" onClick={handClick}>
          6
        </button>
        <button name="*" onClick={handClick}>
          *
        </button>
        <button name="1" onClick={handClick}>
          1
        </button>
        <button name="2" onClick={handClick}>
          2
        </button>
        <button name="3" onClick={handClick}>
          3
        </button>
        <button name="/" onClick={handClick}>
          /
        </button>
        <button name="0" onClick={handClick}>
          0
        </button>
        <button name="." onClick={handClick}>
          .
        </button>

        <button id="result" onClick={calculate}>
          Result
        </button>
      </div>
    </div>
  );
}