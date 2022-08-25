import React from "react";
import { createRoot } from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from "./App";

const firebaseConfig = {
    apiKey: "AIzaSyCDE1IYVvvyRj4n6RyqJTXYQ2NTikdXW2w",
    authDomain: "cart-cedea.firebaseapp.com",
    projectId: "cart-cedea",
    storageBucket: "cart-cedea.appspot.com",
    messagingSenderId: "169218378656",
    appId: "1:169218378656:web:c58e4ee95eb9e848a872c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
