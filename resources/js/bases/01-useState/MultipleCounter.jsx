import { useState } from "react";

export const MultipleCounter = () => {
  const [counters, setcounters] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  })

  const {counter1, counter2, counter3} = counters;

  const handleCounter = (counterName, value) => {
    setcounters(prev => ({
      ...prev,
      [counterName]: value,
    }))
  }

  return (
    <>
      <h1>MultipleCounter</h1>
      <hr/>

      <h3>Counters</h3>

      <div>
        <h5>Counter 1: {counter1}</h5>
        <h5>Counter 2: {counter2}</h5>
        <h5>Counter 3: {counter3}</h5>
      </div>

      <div>
        <button onClick={() => handleCounter('counter1', counter1 + 10)}>
          Counter 1
        </button>
        <button onClick={() => handleCounter('counter2', counter2 + 10)}>
          Counter 2
        </button>
        <button onClick={() => handleCounter('counter3', counter3 + 10)}>
          Counter 3
        </button>
      </div>
    </>
  );
}