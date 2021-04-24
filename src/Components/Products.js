import React from "react"
import Product from "./Product"
import "../index.css"


const Products = ({data,addToCart}) =>{
    const items = data.map(item=>{
        return <Product data={item} key={item.id} addToCart={addToCart} />
    })

    return(<section className="Products">
        {items}
    </section>)

}

export default Products;