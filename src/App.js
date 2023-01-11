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

  handleIsDark = () => {
    this.setState(({ isDark }) => ({
      isDark: !isDark,
    }))
  }

  render() { 
    const { isDark } = this.state;
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