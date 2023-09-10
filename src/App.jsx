import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Users from './Users'
import Friends from './friends'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Team></Team>
      <Users></Users>


    </>
  )
}


export default App
