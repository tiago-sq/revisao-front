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

Card.propTypes = {
  name: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default Card;