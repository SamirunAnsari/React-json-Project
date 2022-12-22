import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { renderMatches } from 'react-router-dom'
export default function Home() {

    const [api, setApi] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            setApi(res.data)
            console.log(res.data)
        })

    },[])

    return(

   <div className='container'>
    <h1>Home Page</h1>
    <div className='row'>
        {api && api.map((res)=>
        <div className='col-xl-4'>
        <img src={res.image} className="img-fluid" />
        <h4>{res.title}</h4>
        <h4>{res.price}</h4>
        <p>{res.category}</p>
    </div>
        )}
        
    </div>
   </div>
    )
}