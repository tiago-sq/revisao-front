import { Component } from 'react';

class NotFound extends Component {
  state = {  } 
  render() { 
    return (
      <div className='not-found-container'>
        <h1>404</h1>
        <p>Página Não Encontrada!</p>
      </div>
    );
  }
}

export default NotFound;