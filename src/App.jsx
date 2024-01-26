import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [displayValue, setDisplayValue] = useState("");

  function appendToDisplay(input) {
    setDisplayValue(value => value + input)
  }

  function clearDisplay() {
    setDisplayValue("")
  }

  function calculate() {
    try {
      const value = eval(displayValue)
      setDisplayValue(value)
    } catch (error) {
      setDisplayValue("Error")
    }
  }

  return (
    <div className="App" id="calculator">
      <input value={displayValue} readOnly id="display"></input>
        <div id="keys">
          <button onClick={() => appendToDisplay("+")} className="operator-button">+</button>
          <button onClick={() => appendToDisplay("7")}>7</button>
          <button onClick={() => appendToDisplay("8")}>8</button>
          <button onClick={() => appendToDisplay("9")}>9</button>
          <button onClick={() => appendToDisplay("-")} className="operator-button">-</button>
          <button onClick={() => appendToDisplay("4")}>4</button>
          <button onClick={() => appendToDisplay("5")}>5</button>
          <button onClick={() => appendToDisplay("6")}>6</button>
          <button onClick={() => appendToDisplay("*")} className="operator-button">*</button>
          <button onClick={() => appendToDisplay("1")}>1</button>
          <button onClick={() => appendToDisplay("2")}>2</button>
          <button onClick={() => appendToDisplay("3")}>3</button>
          <button onClick={() => appendToDisplay("/")} className="operator-button">/</button>
          <button onClick={() => appendToDisplay("0")}>0</button>
          <button onClick={() => appendToDisplay(".")}>.</button>
          <button onClick={() => calculate()}>=</button>
          <button onClick={() => clearDisplay()} className="operator-button">C</button>
        </div>
    </div>
  )
}

export default App
