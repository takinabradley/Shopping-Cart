import ProductCard from "./ProductCard"

export default function ProductList({products}) {
  const productCards = Object.values(products).map( product =>
    <ProductCard product={product} key={product.id} />
  )

  return (
    <div data-testid='productList' className="product-list">
      {productCards}
    </div>
  )
}