import React from 'react'
import { useOutletContext } from 'react-router-dom'
import ProductList from './ProductList'
import "./Shop.css"
export default function Shop() {
  const OutletContext = useOutletContext()
  const products = OutletContext?.products
  
  return (
    <div data-testid='shop'>
      {products ? <ProductList products={products}/> : null}
    </div>
  )
}
