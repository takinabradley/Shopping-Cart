import React from 'react'
import { useOutletContext } from 'react-router-dom'
import ProductList from './ProductList'

export default function Shop() {
  const OutletContext = useOutletContext()
  const products = OutletContext?.products
  
  return (
    <div data-testid='shop'>
      Shop Page
      {products ? <ProductList products={products}/> : null}
    </div>
  )
}
