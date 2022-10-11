import "../styles/main.css"
import { useState , useContext } from "react";
import pizzaList from "../data/pizzas.json"
import CartContext from "../context/CartContext";
import Search from "./Search"
import ShowPizza from "./ShowPizza";

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
      {pizzas.map(pizza => <ShowPizza pizza={pizza} sizeHandler={sizeHandler} cartHandler={cartHandler}/> )}       
    </>
  ) : (    
  <>
   <Search pizzas={pizzas} searchList={searchList} setSearchList={setSearchList} input={input} setInput={setInput}/>
      {searchList.map(pizza => <ShowPizza pizza={pizza} sizeHandler={sizeHandler} cartHandler={cartHandler}/> )}   
  </>)
};

export default Main;