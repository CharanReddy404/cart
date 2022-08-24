import React from "react";


const styles = {
    image: {
        height: 110,
        width: 110,
        broderRadius: 4,
        background: "#ccc"
    }
}

const CartItem = (props) => {


    // increaseQuantity = () => {
    //     // this.setState({
    //     //     qty: this.state.qty + 1,
    //     // })
    //     this.setState((prev) => {
    //         return {
    //             qty: prev.qty + 1
    //         };
    //     })
    // }

    // decreaseQuantity = () => {
    //     const { qty } = this.state;
    //     if (qty === 0) {
    //         return;
    //     }

    //     this.setState((prev) => {
    //         return {
    //             qty: prev.qty - 1
    //         };
    //     })
    //     // this.setState({
    //     //     qty: this.state.qty - 1,
    //     // })
    // }

    const { price, title, qty, image } = props.product;
    const { product, onIncreaseQty, onDecreaseQty, onDeleteProduct } = props;

    return (
        <div className="cart-item">
            <div className="left-block">
                <img alt="" style={styles.image} src={image} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    { }
                    <img
                        alt="increase"
                        onClick={() => { onIncreaseQty(product) }}
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png"
                    />
                    <img
                        alt="decrease"
                        onClick={() => { onDecreaseQty(product) }}
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/56/56889.png"
                    />
                    <img
                        alt="delete"
                        onClick={() => { onDeleteProduct(title) }}
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                    />
                </div>
            </div>
        </div >
    );
}

export default CartItem;