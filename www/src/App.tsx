import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as wasm from "instrumentum-rs";

const App = () => {
  const [count, setCount] = useState(0)
  const greeting = wasm.greet();

  return (
    <div className="App">
      {greeting}
    </div>
  )
}

export default App
