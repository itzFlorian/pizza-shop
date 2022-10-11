const Search = ({setSearchList, pizzas, setInput, input}) => {
  const changeHandler = (event) =>{
    setInput(event.target.value)    
  }

const clickHandler = (event)=>{
  event.preventDefault()
  const newList = pizzas.filter(pizza => pizza.pizza.toLowerCase().includes(input.toLowerCase()))
  setSearchList(newList)  
}
  return (
    <div className="search">
      <form onChange={event => clickHandler(event)}>
        <label htmlFor="search">Search for your pizza: </label>
        <input type="text" id="search" value={input} onChange={event => changeHandler(event)}/>
      </form>
    </div>
  );
};

export default Search;