import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import uniquid from "uniquid";

const products = {
  product1: {
    name: 'product1',
    img: img1,
    description: 'a product',
    price: 150,
    stock: 3,
    id: uniquid()
  },
  product2: {
    name: 'product2',
    img: img2,
    description: 'a product',
    price: 30,
    stock: 15,
    id: uniquid()
  },
  product3: {
    name: 'product3',
    img: img3,
    description: 'a product',
    price: 25,
    stock: 12,
    id: uniquid()
  }
}

export default products;