import { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() { 
    /*
      O componente Link ser para a criação de oportunidades de navegação no componente.
      Ao contrário do <a href=""> o Link não causa redirecionamento na página, logo estados/props não são perdidos.s
    */
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