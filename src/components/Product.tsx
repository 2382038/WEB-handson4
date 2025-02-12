import React from "react";

interface Product {
    name: string;
    description: string;
    price: string;
    imageUrl: string
}

const Product: React.FC<Product> = (props) => {
    return (
        <div style={{ border: "1px solid black", margin: "20px", borderRadius: "20px", padding: "20px"}}>
            <img src={props.imageUrl} alt={props.name} width={100} height={100}/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>Price: {props.price}</p>
        </div>
    )
}
export default Product

React