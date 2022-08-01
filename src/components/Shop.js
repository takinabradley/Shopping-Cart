import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductList from "./ProductList";
import "./Shop.css";

export default function Shop() {
  // || ensures we're destructuring an object if function returns undefined
  const { products, setProducts } = useOutletContext() || {};
  const [cart, setCart] = useState({});

  function checkOut() {}

  function removeFromCart(product) {
    const newCart = { ...cart };
    delete newCart[product.name];
    setCart(newCart);
  }

  function addToCart(product) {
    const newCart = { ...cart, [product.name]: product };
    setCart(newCart);
    console.log("cart:", newCart);
  }

  const productList = products ? (
    <ProductList products={products} addToCart={addToCart} />
  ) : null;

  return (
    <div data-testid="shop">
      {productList}
    </div>
  );
}
