import React from 'react'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import PageNotFound from './PageNotFound.jsx'
import About from './About.jsx'
import Product from './Product.jsx'
import Details from './Details.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':id' element={<Details/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App