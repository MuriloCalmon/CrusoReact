/* import { useEffect, useRef, useState } from 'react'
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

export default App */

import { useEffect, useState } from "react"

//Custom hook, useMediaQuery

const useMediaQuery = (queryValue, initialValue = false) => {
  const [macth, setMatch] = useState(initialValue)

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue)

    const handleChange = () => {
      if (!isMounted) return
      setMatch(Boolean(matchMedia.matches))
    }

    matchMedia.addEventListener('change', handleChange)
    setMatch(!!matchMedia.matches)

    return () => {
      isMounted = false
      matchMedia.removeEventListener('change', handleChange)
    }
  },[queryValue])

  return macth
}

export const App = () => {
  const huge = useMediaQuery('(min-width: 980px)')
  const big = useMediaQuery('(max-width: 989px) and (min-width: 768px)')
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px)')
  const small = useMediaQuery('(max-width: 321px)')

  const background = huge ? 'green': big ? 'blue' : medium ? 'gray' : small ? 'purple' : null
  return (
    <>
      <div style={{background}} >OI</div>
    </>
  )
}