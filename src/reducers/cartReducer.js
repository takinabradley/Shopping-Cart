export default function cartReducer(prevCart, action) {
  const product = action.product
  const productID = product.id
  const currentQuantity = prevCart[productID]?.quantity || 0

  switch (action.type) {
    case "add":
      if (currentQuantity !== 0) {
        return {
          ...prevCart,
          [productID]: { ...prevCart[productID], quantity: currentQuantity + 1 }
        }
      } else {
        return {
          ...prevCart,
          [productID]: { product: action.product, quantity: 1 }
        }
      }

    case "remove":
      if (currentQuantity === 0) {
        return prevCart
      } else if (currentQuantity === 1) {
        const newCart = { ...prevCart }
        delete newCart[productID]
        return newCart
      } else {
        return {
          ...prevCart,
          [productID]: {
            ...prevCart[productID],
            quantity: currentQuantity - 1
          }
        }
      }

    case "set":
      if (action.quantity !== 0) {
        return {
          ...prevCart,
          [productID]: {
            product: action.product,
            quantity: action.quantity
          }
        }
      } else {
        const newCart = { ...prevCart }
        delete newCart[productID]
        return newCart
      }

    default:
      return prevCart
  }
}
