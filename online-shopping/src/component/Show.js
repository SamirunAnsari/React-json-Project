import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom';

export default function Show() {
    const [api, setApi]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/product")
        .then(res=>{
            console.log(res);
            console.log(res.data)
            setApi(res.data);
        });
    },[])
  return (
    <div className='container'>
    <h1>Show product</h1>
    <div className='row'>
    {
        api  && api.map(val=>

            <div className='col-xl-4'>
            <img src={val.image} className="img-fluid" />
            <h4>{val.title}</h4>
            <h4>{val.price}</h4>
            <p>{val.category}</p>
            <p>
            <button className='btn btn-warning'>Add To Cart</button>
            &nbsp;&nbsp;
            <Link to={"/single-product/"+val.id} className='btn btn-success'>Details</Link>
            </p>
            </div>
            )
    }
    </div>
    </div>
  )
}
