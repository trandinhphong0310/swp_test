import { useState } from 'react';
import './App.css';
import Content from "./Content.js"

function App() {
  const[show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => {setShow(true)}}>
        Toggle
      </button>
      {show && <Content/>}
    </div>
  )
}

export default App;
