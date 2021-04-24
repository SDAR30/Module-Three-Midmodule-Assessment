import React from "react"
import "../index.css"

class Form extends React.Component {
    state = { first: "", last: "", email: "", card: "", zip: "" };

    handleSubmit = (e) => {
        e.preventDefault();
           const { total } = this.props;
           const { first, last, email, card, zip } = this.state;
          if (!first || !last || !email || !card || !zip) {
            window.alert("Input is not valid");
          }else if (card.length!==16){
              window.alert("Credit card number is not valid")
          }else if(zip.length!==5){
              window.alert("Zip code is not valid")
          }else{
              window.alert(`Purchase complete! You will be charged $${total.toFixed(2)}`)
          }
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    render() {
        const { first, last, email, card, zip } = this.state;
        return (
            <form className="FormContainer" onSubmit={this.handleSubmit}>
                <h2>Checkout</h2>
                <label htmlFor="first">First Name</label>
                <input
                    id="first"
                    name="first"
                    value={first}
                    onChange={this.handleChange}
                />
                <label htmlFor="last">Last Name</label>
                <input
                    id="last"
                    name="last"
                    value={last}
                    onChange={this.handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <label htmlFor="card">Credit Card</label>
                <input
                    id="card"
                    name="card"
                    value={card}
                    onChange={this.handleChange}
                />
                <label htmlFor="zip">Zip Code</label>
                <input
                    id="zip"
                    name="zip"
                    value={zip}
                    onChange={this.handleChange}
                />
                <br />
                <button type="submit">Buy Now</button>
            </form>
        );
    }
}
export default Form;