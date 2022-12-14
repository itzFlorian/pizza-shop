import { Link } from "react-router-dom";
const menuItems = ["contact", "main", "shopping-cart"]
const Header = () => {
  return (
    <div>
      <ul>
        {menuItems.map(item=><li><Link to={item}>{item}</Link></li>)}
      </ul>
    </div>
  );
};

export default Header;