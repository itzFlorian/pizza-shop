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
  const [quantityInput, setQuantityInput] = useState(0)

  const sizeHandler = (event, pizza) => {
    const size = event.target.value
    const newPizzaList = pizzas.map(pizzaItem => pizzaItem === pizza ? {...pizzaItem, size:size, quantity: quantityInput === 0 ? 1 : quantityInput} : pizzaItem )
    setPizzas(newPizzaList)
  }

  const cartHandler = (event, pizza)=>{
    event.preventDefault()
    const newCart = [...cart, pizza]
    setCart(newCart)
    alert("Wurde dem Warenkorb hinzugefügt!")
  }  

  return input === "" ? (
    <>
    <Search pizzas={pizzas} searchList={searchList} setSearchList={setSearchList} input={input} setInput={setInput}/>
      {pizzas.map(pizza => <ShowPizza pizza={pizza} sizeHandler={sizeHandler} cartHandler={cartHandler} quantityinput={quantityInput} setQuantityInput={setQuantityInput}/> )}       
    </>
  ) : (    
  <>
   <Search pizzas={pizzas} searchList={searchList} setSearchList={setSearchList} input={input} setInput={setInput}/>
      {searchList.map(pizza => <ShowPizza pizza={pizza} sizeHandler={sizeHandler} cartHandler={cartHandler} quantityinput={quantityInput} setQuantityInput={setQuantityInput}/> )}   
  </>)
};

export default Main;