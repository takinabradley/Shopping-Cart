import React from 'react'
import { useOutletContext } from 'react-router-dom'
import ProductList from './ProductList'
import "./Shop.css"

export default function Shop() {
  // || ensures we're destructuring an object if function returns undefined
  const { products, setProducts } = useOutletContext() || {}
  
  return (
    <div data-testid='shop'>
      {products ? <ProductList products={products}/> : null}
    </div>
  )
}
