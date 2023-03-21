import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import isEmpty from "../scripts/isEmpty";
import ProductList from "./ProductList";
import Cart from "./Cart";


export default function Shop() {
  const { products } = useOutletContext() || {}
  const [state, setState] = useState({
    products,
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
  }

  function removeFromCart(product) {
    const newCart = { ...state.cart };
    delete newCart[product.name];
    setState({...state, cart: newCart})
  }

  function addToCart(product) {
    const newCart = { ...state.cart, [product.name]: product };
    setState({...state, cart: newCart})
  }

  const productList = products ? (
    <ProductList products={state.products} addToCart={addToCart} />
  ) : null;

  const cart = (!isEmpty(state.cart)) ? (<Cart cart={state.cart} checkOut={checkOut} removeFromCart={removeFromCart}/>) : null

  return (
    <div data-testid="shop">
      {productList}
      
      {cart}
    </div>
  );
}
