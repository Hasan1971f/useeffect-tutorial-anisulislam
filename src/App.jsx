import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const[count, setCount] = useState(0)
  const[isLoading, setIsLoading] = useState(false)
const hnadlOnClick=()=>{
  setCount(count+1)
}
const hnadlOnClick2=()=>{
  setIsLoading(isLoading)
}


 useEffect(()=>{
  console.log("use Effect")
 },[count]) 
  return (
    <>
      
    <div>
      {console.log("rendering")}
      <h1>Count:{count}</h1>
    <button onClick={hnadlOnClick}>+</button>
    <button onClick={hnadlOnClick2}>isLoading</button>
    </div>
      
  
    </>
  )
}

export default App
