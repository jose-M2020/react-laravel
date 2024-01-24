import { useState } from "react"

export const Counter = () => {
  const [counter, setCounter] = useState(100);

  const handleIncrement = (incrementBy = 1) => {
    setCounter(counter + incrementBy);
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(100);
  }

  return (
    <>
      <h1>Use state</h1>

      <hr />
      <div className="d-flex">
        <h2>Valor:</h2>
        <h2
          style={{
            marginLeft: '1rem',
            marginTop: '5px'
          }}
        >
          {counter}
        </h2>

        <div className="d-flex justify-content-around" style={{width: '20rem',}}>
          <button onClick={() => handleIncrement()} className="btn btn-success">
            Incrementar
          </button>
          <button onClick={handleDecrement} className="btn btn-warning">
            Restar
          </button>
          <button onClick={handleReset} className="btn btn-danger">
            Reset
          </button>
          <button onClick={() => handleIncrement(10)} className="btn btn-dark">
            Increment by 1o
          </button>
        </div>
      </div>
    </>

  )
}