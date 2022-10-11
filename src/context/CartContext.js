import {createContext, useState } from "react";

const CartContext = createContext(["cart", ()=>{}])

const CartContextProvider = (props) =>{
  const cart = useState([])
  return (
  <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  )
}

export default CartContext
export {CartContextProvider}