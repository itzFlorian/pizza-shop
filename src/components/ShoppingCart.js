import CartContext from "../context/CartContext";
import { useContext, useSate } from "react";


const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext)
  const prices = cart.map(item =>{
    return item.price[item.size]
  })
  console.log(prices);
  return (
    <>
      <h1>Here is your Order</h1>
      {cart.map(item => {
        return (
          <div className="cart-container">
            <p>Name: {item.pizza}</p>
            <p>size: {item.size}</p>
            <p>price: {`${item.price[item.size]} €`}</p>
          </div>
        )
      })}
      <h2>Total: {prices.reduce((num1, num2)=>{
        return (num1+num2)
      })} €</h2>
    </>
  );
};

export default ShoppingCart;