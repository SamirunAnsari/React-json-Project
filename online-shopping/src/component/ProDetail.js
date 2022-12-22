import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";

export default function Productdetail() {
    const [rec, setRec] = useState({});

    let { productId } = useParams(); //Object { productId: "1" }
    console.log("IN SINGLE PRODUCT COMP");
    console.log(productId);

    useEffect(() => {
        axios.get("http://localhost:3005/product/" + productId)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setRec(res.data);
            })
    }, [])
    return (
        <div className="container product-details">
            <div className='row'>
                <h1 className='text-center'>Single Page</h1>
                <hr />
                <div className="col-xl-4">
                    <img src={rec.image} className="img-fluid" alt="" />
                </div>


                <div className="col-xl-6">
                    <h2>{rec.title}</h2>
                    <p>Web ID: 1089772</p>
                    <span>
                        <span>US {rec.price}</span>
                        <label>Quantity:</label>
                        <input type="text" value="3" />
                        <button type="button" className="btn btn-warning">
                            <i className="fa fa-shopping-cart"></i>
                            Add to cart
                        </button>
                        <br/>
                        <Link to={"/delete-data/" + rec.id} className=" btn btn-danger">
                            <i className="fa fa-shopping-cart"></i>
                            Delete
                        </Link>
                        <Link to={"/update-data/" + rec.id} className="btn btn-primary">
                            <i className="fa fa-shopping-cart"></i>
                            Update
                        </Link>
                    </span>
                    <p><b>Availability:</b> In Stock</p>
                    <p><b>Condition:</b> New</p>
                    <p><b>category:</b>{rec.category}</p>
                    <p>
                        {
                            rec.description
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}
