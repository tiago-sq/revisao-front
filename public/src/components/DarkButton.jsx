import { Component } from 'react';

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
 
export default DarkButton;