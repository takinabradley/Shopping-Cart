import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductList from "./ProductList";
import products from '../products'
import "./Shop.css";

export default function Shop() {
  const [state, setState] = useState({
    products: products,
    cart: {}
  })

  function checkOut() {
    const newProducts = { ...state.products }
    const currentCart = { ...state.cart }
    
    for (const product in currentCart) {
      newProducts[product].stock = newProducts[product].stock - currentCart[product].quantity
    }
    console.log(newProducts)
    setState({ products: newProducts, cart: {} })
    /* setProducts(newProducts)
    setCart({}) */
  }

  function removeFromCart(product) {
    const newCart = { ...state.cart };
    delete newCart[product.name];
    setState({...state, cart: newCart})
    //setCart(newCart);
  }

  function addToCart(product) {
    const newCart = { ...state.cart, [product.name]: product };
    setState({...state, cart: newCart})
    //setCart(newCart);
    console.log("cart:", newCart);
  }

  const productList = products ? (
    <ProductList products={state.products} addToCart={addToCart} />
  ) : null;

  return (
    <div data-testid="shop">
      {productList}
      <button onClick={checkOut}>Checkout</button>
    </div>
  );
}
