import React from "react";
import Cart from "./Cart";
import NavBar from "./Navbar";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCDE1IYVvvyRj4n6RyqJTXYQ2NTikdXW2w",
    authDomain: "cart-cedea.firebaseapp.com",
    projectId: "cart-cedea",
    storageBucket: "cart-cedea.appspot.com",
    messagingSenderId: "169218378656",
    appId: "1:169218378656:web:c58e4ee95eb9e848a872c5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            Loading: true
        }
    }

    componentDidMount() {

        async function getProducrs(db) {
            const productCol = collection(db, 'products');
            // console.log(productCol)
            const productSnapshot = await getDocs(productCol);
            // console.log(productSnapshot)
            const productList = productSnapshot.docs.map(doc => {
                const data = doc.data();
                data['id'] = doc.id;
                return data;
            });
            // console.log(productList)
            return productList;
        }
        getProducrs(db)
            .then((data) => {
                console.log(data);
                this.setState({ products: data, Loading: false })
            });
        // console.log(data)

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
        products.forEach((product) => {
            total += product.qty * product.price;
        })
        return total;
    }

    render() {
        const { products, Loading } = this.state;
        return (
            <div className="App">
                <NavBar count={this.getCartCount()} />
                <Cart
                    products={products}
                    onIncreaseQty={this.onIncreaseQty}
                    onDecreaseQty={this.onDecreaseQty}
                    onDeleteProduct={this.onDeleteProduct}
                />
                {Loading && <h1>Loading Products...</h1>}
                <div>
                    <h1>Total Price: {this.getCartTotal()}</h1>
                </div>
            </div>
        );
    }
}

export default App;