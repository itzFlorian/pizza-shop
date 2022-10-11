const ShowPizza = ({pizza, sizeHandler, cartHandler}) => {
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
        <p>{`${pizza.price[pizza.size]} €`}</p>
        <button type="button" onClick={(event) => cartHandler(event, pizza)} >Add to Cart</button>
      </div>
    </div>
  );
};

export default ShowPizza;