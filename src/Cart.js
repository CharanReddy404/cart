import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 19999,
                    title: 'Mobile Phone',
                    qty: 1,
                    image: ''
                },
                {
                    price: 999,
                    title: 'Watch',
                    qty: 1,
                    image: ''
                }, {
                    price: 99999,
                    title: 'Laptop',
                    qty: 1,
                    image: ''
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

    render() {

        const { products } = this.state;


        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            key={product.title}
                            onIncreaseQty={this.onIncreaseQty}
                            onDecreaseQty={this.onDecreaseQty}
                            onDeleteProduct={this.onDeleteProduct}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Cart;