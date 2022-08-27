import React from "react";
import Cart from "./Cart";
import NavBar from "./Navbar";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

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


        onSnapshot(collection(db, 'products'), (snapshot) => {
            const productList = snapshot.docs.map(doc => {
                const data = doc.data()
                data['id'] = doc.id;
                return data;
            });
            console.log(productList);
            this.setState({ products: productList, Loading: false })
        })
        // this.readData();
        // const querySnapshot = await getDocs(collection(db, "products"));
        // const productList = querySnapshot.docs.map((doc) => {
        //     const data = doc.data();
        //     data['id'] = doc.id;
        //     console.log(doc.data());
        //     return data;
        // });
        // const unsub = await onSnapshot(querySnapshot, (docSnapshot) => {
        //     if (docSnapshot.exists()) {
        //         const getProducts = [];
        //         docSnapshot.forEach((doc) => {
        //             const product = doc.data();
        //             product.id = doc.id;
        //             getProducts.push(product);
        //         })
        //         console.log(getProducts)
        //         this.setState({ products: getProducts, Loading: false });
        //     }
        // });
        // this.setState({ products: productList, Loading: false });


        // async function getProducrs(db) {
        //     const productCol = collection(db, 'products');
        //     // console.log(productCol)
        //     const productSnapshot = await getDocs(productCol);
        //     // console.log(productSnapshot)
        //     const productList = productSnapshot.docs.map(doc => {
        //         const data = doc.data();
        //         data['id'] = doc.id;
        //         return data;
        //     });
        //     // console.log(productList)
        //     return productList;
        // }
        // getProducrs(db)
        //     .then((data) => {
        //         console.log(data);
        //         this.setState({ products: data, Loading: false })
        //     });
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

    addProduct = async () => {
        try {
            const docRef = await addDoc(collection(db, "products"), {
                title: 'TV',
                qty: 1,
                price: 49999,
                img: 'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/7/174299_2020.jpg'
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    render() {
        const { products, Loading } = this.state;
        return (
            <div className="App">
                <NavBar count={this.getCartCount()} />
                <button onClick={this.addProduct} style={{ padding: 10, fontSize: 20 }}>Add Product</button>
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