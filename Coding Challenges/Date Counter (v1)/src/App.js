import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCounter] = useState(0);

  function handlePreviouseStep() {
    if (step > 0) setStep((s) => s - 1);
    // if (step > 0) setStep(step - 1);
  }

  function handleNextStep() {
    setStep((s) => s + 1);
    // setStep(step + 1);
  }

  function handlePreviouseCounter() {
    setCounter((c) => c - step);
  }

  function handleNextCounter() {
    setCounter((c) => c + step);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={handlePreviouseStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleNextStep}>+</button>
      </div>

      <div>
        <button onClick={handlePreviouseCounter}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleNextCounter}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

// Jonas solution:
//   return (
//     <div>
//       <div>
//         <button onClick={() => setStep((c) => c - 1)}>-</button>
//         <span>Step: {step}</span>
//         <button onClick={() => setStep((c) => c + 1)}>+</button>
//       </div>

//       <div>
//         <button onClick={() => setCount((c) => c - step)}>-</button>
//         <span>Count: {count}</span>
//         <button onClick={() => setCount((c) => c + step)}>+</button>
//       </div>

//       <p>
//         <span>
//           {count === 0
//             ? "Today is "
//             : count > 0
//             ? `${count} days from today is `
//             : `${Math.abs(count)} days ago was `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </div>
//   );
// }
