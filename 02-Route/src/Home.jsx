import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Home = () => {
    let navigate = useNavigate();
  return (
    <>
        <h1>Home Page</h1>
        <button onClick={()=>navigate("/about")}>Go to about page</button>
        <button onClick={()=>navigate("/contact")}>Go to contact page</button>
        <button onClick={()=>navigate("/")}>Go to Home page</button>
        <button onClick={()=>navigate("*")}>Go to PageNotFoundPage</button>
    </>
  )
}

export default Home