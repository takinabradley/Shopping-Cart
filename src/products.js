import uniquid from "uniquid";

const products = {
  product1: { name: 'product1', price: 150, stock: 3, id: uniquid()},
  product2: { name: 'product2', price: 30, stock: 15, id: uniquid()},
  product3: { name: 'product3', price: 25, stock: 12, id: uniquid()}
}

export default products;