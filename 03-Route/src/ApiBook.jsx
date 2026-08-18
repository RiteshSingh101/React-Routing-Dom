import React from 'react'
import {Outlet} from 'react-router-dom'
const ApiBook = () => {
  return (
    <div>
        <h1>Api Book</h1>
        <Outlet/>
    </div>
  )
}

export default ApiBook