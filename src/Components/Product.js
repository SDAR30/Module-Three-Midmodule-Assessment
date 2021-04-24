import React from "react"


const Product = ({data,addToCart}) =>{
    const { id, name, price, description, img } = data; 
    return(
        <section>
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <button onClick={()=>addToCart(name,price)}>Add To Cart</button>
            <br></br>
            <img src={img} alt="product"/>
            <p>{description}</p>
            
        </section>
    )

}

export default Product;