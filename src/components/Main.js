import "../styles/main.css"
import { useState , useContext } from "react";
import pizzaList from "../data/pizzas.json"
import CartContext from "../context/CartContext";
import Search from "./Search"

const Main = () => {
  const [searchList, setSearchList] = useState([])
  const [pizzas, setPizzas] = useState(pizzaList)
  const [cart, setCart] = useContext(CartContext)
  const [input, setInput] = useState("")

  const sizeHandler = (event, pizza) => {
    const size = event.target.value
    const newPizzaList = pizzas.map(pizzaItem => pizzaItem === pizza ? {...pizzaItem, size:size} : pizzaItem )
    setPizzas(newPizzaList) 
    console.log(newPizzaList);
  }

  const cartHandler = (event, pizza)=>{
    event.preventDefault()
    const newCart = [...cart, pizza]
    setCart(newCart)
    console.log(newCart);
  }
  

  return input === "" ? (
    <>
      <Search pizzas={pizzas} searchList={searchList} setSearchList={setSearchList} input={input} setInput={setInput}/>      
      {pizzas.map(pizza=>{
        return (
          <div className="pizza-container">
            <div>
              <h2>{pizza.pizza}</h2>
              <img className="pizza-img" src={pizza.img} alt="pizza" />
            </div>
            <div className="pizza-element">
              <select onChange={(event)=> sizeHandler(event, pizza)} id="size">
                <option value="m">Medium</option>
                <option value="s">Small</option>
                <option value="l">Large</option>
              </select>
              <p>
                {`${pizza.price[pizza.size]} €`}
              </p>
              <button type="button" onClick={(event) => cartHandler(event, pizza)} >Add to Cart</button>
            </div>
          </div>
       ) })}      
    </>
  ) : (    
  <>
    <Search pizzas={pizzas} searchList={searchList} setSearchList={setSearchList} input={input} setInput={setInput}/>      
    {searchList.map(pizza=>{
      return (
        <div className="pizza-container">
          <div>
            <h2>{pizza.pizza}</h2>
            <img className="pizza-img" src={pizza.img} alt="pizza" />
          </div>
          <div className="pizza-element">
            <select onChange={(event)=> sizeHandler(event, pizza)} id="size">
              <option value="m">Medium</option>
              <option value="s">Small</option>
              <option value="l">Large</option>
            </select>
            <p>
              {`${pizza.price[pizza.size]} €`}
            </p>
            <button type="button" onClick={(event) => cartHandler(event, pizza)} >Add to Cart</button>
          </div>
        </div>
     ) })}      
  </>)
};

export default Main;