import "../styles/main.css"
import { useState } from "react";
import pizzaList from "../data/pizzas.json"

const Main = () => {
  const [pizzas, setPizzas] = useState(pizzaList)
  const [shoppingCart, setShoppingCart] = useState([])

  const sizeHandler = (event, pizza) => {
    const newPizzaList = pizzas.map(pizzaItem => pizzaItem === pizza ? {...pizzaItem, size:event.target.value, price: 
      pizzaItem.size === "s" ? pizzaItem.price - 1 
    : pizzaItem.size=== "l" ? pizzaItem.price + 1.5 
    : pizzaItem.price  } : pizzaItem)
    setPizzas(newPizzaList)  
  } 
  const cartHandler = (event, pizza)=>{
    event.preventDefault()
    const newCart = [...shoppingCart, pizza]
    setShoppingCart(newCart)
    console.log(newCart);
  }
  

  return (
    <>
      {pizzas.map(pizza=>{
        return (
          <div>
            <h2>{pizza.pizza}</h2>
            <div className="pizza-container">
              <img className="pizza-img" src={pizza.img} alt="pizza" />
    
                <label htmlFor="size">choose your size: </label>
                <select onChange={(event)=> sizeHandler(event, pizza)} id="size">
                  <option value="choose your size"></option>
                  <option value="m">M</option>
                  <option value="s">S</option>
                  <option value="l">L</option>
                </select>
                <p>
                  {pizza.size === "m" ? `${pizza.price} € ` :
                  pizza.size === "l" ? `${pizza.price + 1.50} €`:
                  `${pizza.price - 1} €`}
                </p>
                <button type="button" onClick={(event)=> cartHandler(event, pizza)} >KAUFEN KAUFEN KAUFEN</button>

            </div>
          </div>
       ) })}        
    </>
  );
};

export default Main;