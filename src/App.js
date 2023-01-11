import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Cities from './pages/Cities';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import './index.css';
class App extends Component {


  render() { 
    return (
      <div className="container">
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