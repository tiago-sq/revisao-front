import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DarkButton from './components/DarkButton';
import Menu from './components/Menu';
import Cities from './pages/Cities';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import './index.css';
class App extends Component {
  state = { 
    isDark: false,
  } 

  /*
    Funções podem ser passadas como props, assim como estados e variáveis/constantes.
    Este comportamento é ideal quando um estado deve ser compartilhado com mais de um componente.
  */
  handleIsDark = () => {
    this.setState(({ isDark }) => ({
      isDark: !isDark,
    }))
  }

  render() { 
    const { isDark } = this.state;
    /*
      As rotas representam uma regra ou possibilidade de endereços (URLs).
      As rotas ficam dentro de um Switch para garantir que apenas uma rota seja renderizada por vez.
      O Switch valida as regras "de cima pra baixo", logo as primeiras regras possuem prioridade.
      Nunca se esqueça de encapsular as rotas dentro de um BrowserRouter ou similar (neste caso vide index.js).
      VOcê pode saber mais sobre rotas lendo aqui:
      https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/095ebb0d-1932-4d37-933b-9e1d721646fb/section/1c36f886-88d1-424c-b7b4-d8350620a118/day/6bfa2e2e-4802-4b72-8aeb-b7b55ad63189/lesson/58821282-e7dd-430a-9561-57f122def3ab
    */
    return (
      <div className={ isDark ? 'container dark' : 'container light' }>
        <DarkButton
          isDark={ isDark }
          handleIsDark={ this.handleIsDark }
        />
        <Menu />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/uf/:uf" component= { Cities } />
          <Route path="/search" component={ Search } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}
 
export default App;