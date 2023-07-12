import "./Navbar.css";
import Cart_logo from "./cart.png";
import { useSelector } from "react-redux";
import { handleCart } from "./Redux/reducer/handleCart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export function Navbar() {
  const state = useSelector((state) => state.handleCart);

  return (
    <>
      <nav className="Main-nav">
        <div className="logo">
          <h2>
            <Link to="/">
              <span>Z</span>ippy
            </Link>
          </h2>
        </div>
        <div className="Menu-link">
          <ul className="Menu-link">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shopping">Shopping</Link>
            </li>
            <li>
              <Link to="/todo">To Do List</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="Nav-cart">
          <Link to="/cart">
            <img className="cart_logo" src={Cart_logo} />
          </Link>
        </div>
      </nav>
    </>
  );
}
