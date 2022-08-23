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
        this.setState({
            qty: this.state.qty + 1,
        })
    }

    decreaseQuantity = () => {
        this.setState({
            qty: this.state.qty - 1,
        })
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
                            src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315609.png?token=exp=1661247316~hmac=dde66f1541cacf0d5adc5ada6a11e8a3"
                        />
                        <img
                            alt="decrease"
                            onClick={this.decreaseQuantity}
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1661247254~hmac=f58c4b955f274efb463b7f1114e7ba21"
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