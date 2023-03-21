import React, { useEffect, useState } from "react";
// import tshirt from '../assets/img/tshirt.png'

const API = 'http://localhost:8080/products'

function Products (){
    const [products, setProduct] = useState([])

    useEffect(()=>{
        fetch(API)
        .then(response => response.json())
        .then(data => setProduct(data))
    },[])
    // const [id, name, image_url, price] = products;
    return(
        <div>
            <h1>Product Lists</h1>
            {
                products.map( product =>{
                    const {id, name, image_url, price} = product;
                    return(
                        <div key={id}>
                            <img src={image_url} alt='product' /><br />
                            {image_url}
                            <br />
                            <strong>{name}</strong><br />
   
                            <strong>{price} </strong>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Products;