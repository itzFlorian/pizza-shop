import "../styles/main.css"
import { useState } from "react";
import pizzaList from "../data/pizzas.json"

const Main = (setShoppingCart, shoppingCart) => {
  const [pizzas, setPizzas] = useState(pizzaList)

  const sizeHandler = (event, pizza) => {
    const size = event.target.value
    const newPizzaList = pizzas.map(pizzaItem => pizzaItem === pizza ? {...pizzaItem, size:size} : pizzaItem )
    setPizzas(newPizzaList) 
    console.log(newPizzaList);
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
          <div className="pizza-container">
            <div>
              <h2>{pizza.pizza}</h2>
              <img className="pizza-img" src={pizza.img} alt="pizza" />
            </div>
            <div className="pizza-element">
              <select onChange={(event)=> sizeHandler(event, pizza)} id="size">
                <option value="m">M</option>
                <option value="s">S</option>
                <option value="l">L</option>
              </select>
              <p>
                {`${pizza.price[pizza.size]} €`}
              </p>
              <button type="button" onClick={(event) => cartHandler(event, pizza)} >Add to Cart</button>
            </div>
          </div>
       ) })}        
    </>
  );
};

export default Main;