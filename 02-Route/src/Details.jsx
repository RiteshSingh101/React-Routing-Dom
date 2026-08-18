import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const Details = () => {
    let [product, setProduct] = useState(null)
    let { id } = useParams()
    console.log(id)
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/" + id)
            .then(({ data }) => setProduct(data))
            .catch((e) => console.log(e))
        //   fetch("https://fakestoreapi.com/products/"+id).then((response)=>response.json()).
        // then((data1)=>{console.log(data1);
        //     setProduct(data1)
        // }).catch((e)=>console.log(e))
    },[])
    return (
        <div>
            {
                product != null && <>
                    <h1>category:{product.category}</h1>
                    <h1>description:{product.description}</h1>
                    <h1>title:{product.title}</h1>
                    <h1>images:{product.image}</h1>
                </>
            }
        </div>
    )
}

export default Details