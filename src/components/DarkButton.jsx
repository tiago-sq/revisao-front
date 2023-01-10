import { Component } from 'react';

class DarkButton extends Component {
  render() { 
    const { isDark, handleIsDark } = this.props;
    return (
      <button
        onClick={ handleIsDark }
      >
        { isDark ? 'Dark' : 'Light' }
      </button>
    );
  }
}
 
export default DarkButton;