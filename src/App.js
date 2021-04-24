import React from 'react'
import "./App.css";
import "./index.css";
import Products from "./Components/Products"
import Cart from "./Components/Cart"
import Form from "./Components/Form"
import productData from "./data/productData"


class App extends React.Component {
  state = { cart: [] }


  addToCart = (name, price) => {
    const item = { name, price };
    this.setState((prevState) => {
      return { cart: [...prevState.cart, item] }
    })
  }




  render() {
    const { cart } = this.state
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const tax = (5 / 100) * subtotal;
    console.log(subtotal + " : " + tax + " : " + cart.length)
    return (<section className="garage-container">
      
      <Products data={productData} addToCart={this.addToCart} />
      <section className="checkout-cart">
      <Cart cart={cart} subtotal={subtotal || 0} tax={tax} />
      <Form total={subtotal+tax}/>
      </section>


    </section>)
  }

};

export default App;
