import ProductCard from "./ProductCard"

export default function ProductList({ products, addToCart }) {
  

  const productCards = Object.values(products).map( product =>
    <ProductCard product={product} addToCart={addToCart} key={product.id} />
  )
  return (
    <div data-testid='productList' className="product-list">
      {productCards}
    </div>
  )
}