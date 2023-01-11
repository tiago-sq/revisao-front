import { Component } from 'react';
import PropTypes from 'prop-types';
class DarkButton extends Component {
  render() { 
    const { isDark, handleIsDark } = this.props;
    return (
      <button
        onClick={ handleIsDark }
        className="dark-toggle"
      >
        { isDark ? 'Dark' : 'Light' }
      </button>
    );
  }
}
 
DarkButton.propTypes = {
  isDark: PropTypes.bool.isRequired,
  handleIsDark: PropTypes.func.isRequired,
}

export default DarkButton;