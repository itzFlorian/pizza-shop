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
              <img className="pizza-img" src={item.img} alt="pizza" />
            </div>
            <div>
              <p>{item.pizza}</p>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              {item.quantity !== 1 && <p>Each: {`${item.price[item.size]} €`}</p>}
              <p>Total: {`${item.price[item.size] * item.quantity} €`}</p>
              <button onClick={(event) => removeHandler(event, item)}>löschen</button>
            </div>
          </div>
        )
      })}
      <h2>Order: {sum.toFixed(2)}</h2>
      <h2>Delivery: 2€</h2>
      <h2>Total: {(sum + 2).toFixed(2)} €</h2>      
    </> 
  ): <h1>Cart is empty</h1>
};

export default ShoppingCart;