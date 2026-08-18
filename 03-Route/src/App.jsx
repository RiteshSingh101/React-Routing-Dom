import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import ApiBook from './ApiBook'
import ApiDetails from './ApiDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ApiBook' element={<ApiBook/>}>
          <Route path=':id' element={<ApiDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
