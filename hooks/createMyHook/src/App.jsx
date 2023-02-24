import { useEffect, useRef, useState } from 'react'
import './App.css'

const useMyHook = (cb, delay = 1000) => {
  const saveCb = useRef()

  useEffect(() => {
    saveCb.current = cb
  }, [cb])

  useEffect(() => {
    const interval = setInterval(() => {
      saveCb.current()
    }, delay)

    return () => clearInterval(interval)
  }, [delay])
}

function App() {
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)
  const [incrementor, setIncrementor] = useState(100)


  useMyHook(() => setCount((c) => c + 1), delay)

  return (
    <div className="App">
      <h1>Contador {count}</h1>
      <h1>Delay {delay}</h1>
      <button onClick={() => {setDelay((d) => d + incrementor)}}>+{incrementor}</button>
      <button onClick={() => {setDelay((d) => d - incrementor)}}>-{incrementor}</button>
      <input
       type="number" onChange={(e) => {setIncrementor(Number(e.target.value))}}/>
    </div>
  )
}

export default App
