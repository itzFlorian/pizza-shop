import CartContext from "../context/CartContext";
import { useContext} from "react";

const ShoppingCart = () => {
  const [cart] = useContext(CartContext)
  const prices = cart.map(item => item.price[item.size])
  const sum = prices.length === 0 ? null : prices.reduce((num1, num2) => (num1+num2))
   return cart.length > 0 ? (    
    <>
      <h1>Here is your Order</h1>
      {cart.map(item => {
        return (
          <div className="cart-container">
            <p>{item.pizza}</p>
            <p>size: {item.size}</p>
            <p>price: {`${item.price[item.size]} €`}</p>
            <img className="pizza-img" src={item.img} alt="pizza" />
          </div>
        )
      })}
      <h2>Total: {sum.toFixed(2)} €</h2>      
    </> 
  ): <h1>Cart is empty</h1>
};

export default ShoppingCart;