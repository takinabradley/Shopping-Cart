import ProductCard from "./ProductCard"

export default function ProductList({products}) {
  
  return (
    <div data-testid='productList' className="product-list">
      {Object.values(products).map((product) => <ProductCard product={product} key={product.id} /> )}
    </div>
  )
}