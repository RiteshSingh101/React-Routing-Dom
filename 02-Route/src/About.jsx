import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
    let navigate = useNavigate()

  return (
    <>
        <h1>About Page</h1>
        <button onClick={()=>navigate(-1)}>Back</button>
    </>
  )
}

export default About