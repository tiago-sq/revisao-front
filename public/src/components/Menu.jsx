import { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() { 
    return (
      <header>
        <nav>
          <Link to="/">Página Inicial</Link>
          <Link to="/search">Pesquisa de CEP</Link>
        </nav>
      </header>
    );
  }
}
 
export default Menu;