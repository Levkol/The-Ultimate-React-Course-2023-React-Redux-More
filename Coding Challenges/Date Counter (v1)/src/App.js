import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);

  function handlePreviouseStep() {
    if (step > 0) setStep((s) => s - 1);
    // if (step > 0) setStep(step - 1);
  }

  function handleNextStep() {
    setStep((s) => s + 1);
    // setStep(step + 1);
  }

  function handlePreviouseCounter() {
    if (counter > 0) setCounter((s) => s - 1);
  }

  function handleNextCounter() {
    setCounter((s) => s + 1);
  }
  return (
    <>
      <div className="container">
        <button onClick={handlePreviouseStep}>-</button>
        <div>Step: {step}</div>
        <button onClick={handleNextStep}>+</button>
      </div>
      <div className="container">
        <button onClick={handlePreviouseCounter}>-</button>
        <div>Count: {counter}</div>
        <button onClick={handleNextCounter}>+</button>
      </div>
      <div className="message">Today is Mon Jun 21 2027</div>
    </>
  );
}

// let currentDate = new Date().toUTCString();
// console.log(currentDate);
