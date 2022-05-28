import { Component } from 'react';
import PropTypes from 'prop-types';

class Greet extends Component {
    render() {
        const {name} = this.props
    return (
        <h1>Привет мир, меня зовут: {name}</h1>
    );
    }
}

Greet.propTypes = {
    name: PropTypes.string
  };

  Greet.defaultProps = {
    name: 'Имя не найдено'
  };

export default Greet