import React from 'react'
import { useState } from 'react'
const App = () => {

  let [count, setCount] = useState(0)

  const addValue = () =>{
    if(count <20){
      setCount(count+1)
    }
  }

  const removeValue = () =>{
    if(count > 0){
      setCount(count -1)
    }
  }

  const resetValue = () => {
    setCount(0)
  }
  return (
    <div>
      <h1>App</h1>
      <h4>counter value: {count}</h4>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
      <button onClick={resetValue}>Reset</button>
    </div>
  )
}

export default App  