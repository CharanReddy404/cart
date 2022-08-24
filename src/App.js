import React from "react";
import Cart from "./Cart";
import NavBar from "./Navbar";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 19999,
                    title: 'Mobile Phone',
                    qty: 1,
                    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
                },
                {
                    price: 999,
                    title: 'Watch',
                    qty: 1,
                    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80'
                }, {
                    price: 99999,
                    title: 'Laptop',
                    qty: 1,
                    image: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80'
                }
            ]
        }
    }

    onIncreaseQty = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products: products
        })
    }

    onDecreaseQty = (product) => {
        const { products } = this.state;
        if (product.qty === 0) {
            return;
        }
        const index = products.indexOf(product);
        products[index].qty -= 1;
        this.setState({
            products: products
        })
    }

    onDeleteProduct = (product) => {
        const { products } = this.state;
        const items = products.filter(item => item.title !== product);
        this.setState({
            products: items
        })
    }

    getCartCount = () => {
        const { products } = this.state;
        let count = 0;
        products.forEach((product) => {
            count += product.qty;
        })
        return count;
    }

    getCartTotal = () => {
        const { products } = this.state;
        let total = 0;
        products.map((product) => {
            total += product.qty * product.price;
        })
        return total;
    }

    render() {
        const { products } = this.state;
        return (
            <div className="App">
                <NavBar count={this.getCartCount()} />
                <Cart
                    products={products}
                    onIncreaseQty={this.onIncreaseQty}
                    onDecreaseQty={this.onDecreaseQty}
                    onDeleteProduct={this.onDeleteProduct}
                />

                <div>
                    <h1>Total Price: {this.getCartTotal()}</h1>
                </div>
            </div>
        );
    }
}

export default App;