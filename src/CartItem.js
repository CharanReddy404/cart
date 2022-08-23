import React from "react";


const styles = {
    image: {
        height: 110,
        width: 110,
        broderRadius: 4,
        background: "#ccc"
    }
}

class CartItem extends React.Component {

    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            image: ''
        }
    }

    increaseQuantity = () => {
        this.setState = {}
    }

    decreaseQuantity = () => {

    }

    render() {
        const { price, title, qty, image } = this.state;

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
                            onClick={this.increaseQuantity}
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315609.png?token=exp=1661179108~hmac=935fddd359ee045fd16fecafbe0e80a6"
                        />
                        <img
                            alt="decrease"
                            onClick={this.decreaseQuantity}
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1661179165~hmac=4c6e99c8a6be5877ce09c3b9db9512c1"
                        />
                        <img
                            alt="delete"
                            // onClick={ }
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                        />
                    </div>
                </div>
            </div >
        );
    }
}

export default CartItem;