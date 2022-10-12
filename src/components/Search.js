const Search = ({setSearchList, pizzas, setInput, input}) => {
  const changeHandler = (event) =>{
    const newInput = event.target.value
    setInput(newInput) 
    const newList = pizzas.filter(pizza => pizza.pizza.toLowerCase().includes(newInput.toLowerCase()))
    setSearchList(newList)    
  }
  
  return (
    <div className="search">
      <form onChange={event => changeHandler(event)}>
        <label htmlFor="search">Search for your pizza: </label>
        <input type="text" id="search" />
      </form>
    </div>
  );
};

export default Search;