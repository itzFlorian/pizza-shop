import CartContext from "../context/CartContext";
import { useContext} from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext)

  const prices = cart.map(item => item.price[item.size] * item.quantity)
  const sum = prices.length === 0 ? null : prices.reduce((num1, num2) => (num1+num2))

  const removeHandler =(event, item) => {
    event.preventDefault()
    const newList = cart.filter((currItem) => currItem !== item )
    setCart(newList)
  }    
   return cart.length > 0 ? (
    <>
      <h1>Here is your Order</h1>
      {cart.map(item => {
        return (
          <div className="cart-container">
            <div>
              <p>{item.pizza}</p>
              <p>size: {item.size}</p>
              <p>quantity: {item.quantity}</p>
              <p>price for each: {`${item.price[item.size]} €`}</p>
              <p>total: {`${item.price[item.size] * item.quantity} €`}</p>
              <img className="pizza-img" src={item.img} alt="pizza" />
            </div>
            <div>
              <button onClick={(event) => removeHandler(event, item)}>löschen</button>
            </div>
          </div>
        )
      })}
      <h2>Total: {sum.toFixed(2)} €</h2>      
    </> 
  ): <h1>Cart is empty</h1>
};

export default ShoppingCart;