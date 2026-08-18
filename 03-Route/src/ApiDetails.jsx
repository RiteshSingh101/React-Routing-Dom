import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ApiDetails = () => {

  let [value, setValue] = useState(null)
  let {id} = useParams()
  console.log(id)
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos/"+id)
    .then(({data})=> setValue(data))
    .catch((e)=> console.log(e))
  },[id])
  return (
    <div>
        <h2>Api details</h2>
        {
          value != null && <>
          <h3>Title:{value.title}</h3>
          <h3>Completed:{value.completed ? "Yes" : "No"}</h3>
          </>
        }
    </div>
  )
}

export default ApiDetails