import { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() { 
    const { name, uf, region } = this.props;
    return (
      <div className='card-state'>
        <Link to={ `/uf/${uf}`}>
          <h2>{ name }</h2>
          <p>{ `${uf}/${region}` }</p>
        </Link>
      </div>
    );
  }
}

/*
  PropTypes são interessantes pois as mesmas irão garantir que o componente esteja trabalhando
  com informações válidas. Um exemplo de erro possível é, acidentalmente, um map ser realizado em uma
  prop que não seja um array.

  Você pode saber mais sobre através do link abaixo:
  https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/095ebb0d-1932-4d37-933b-9e1d721646fb/section/f9155e88-21d3-4e7b-a547-7eb92ce00a9b/day/e38fc894-8547-4a79-87c3-cb4bc71a8299/lesson/7599ac29-6c2a-48a7-88c3-e0661bef4424
*/
Card.propTypes = {
  name: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default Card;