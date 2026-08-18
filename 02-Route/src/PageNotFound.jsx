import React from 'react'
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
let navigate = useNavigate()

  return (
    <>
        <h1>Page Not Page</h1>
        <button onClick={()=>navigate(-1)}>Back</button>
    </>
  )
}

export default PageNotFound