import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [age, setage] = useState(0)
  const [sibling, setSib] = useState(0)

  return (
    <>

      <div className="card">
      <h2> Your current Age is {age} </h2>
      <h2>Your siblings {sibling}</h2>
        <button onClick={() => setage((age) => age + 1)}>
          Get Older 💀
        </button>
        <button onClick={() => setSib((sibling) => sibling + 1)}>
          Spawn Siblings 🧌
        </button>
      </div>
    </>
  )
}

export default App
