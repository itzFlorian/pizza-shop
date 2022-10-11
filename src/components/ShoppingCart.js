import CartContext from "../context/CartContext";
import { useContext} from "react";


const ShoppingCart = () => {
  const [cart] = useContext(CartContext)
  const prices = cart.map(item =>{
    return item.price[item.size]
  })
   return  cart.length > 0 && (    
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
      <h2>Total: {prices.reduce((num1, num2)=>{
        return (num1+num2)
      })} €</h2>      
    </>
  )
};

export default ShoppingCart;