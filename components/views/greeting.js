import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'

class Greeting extends Component {
  render() {
    return <Text style={this.props.style}>Hello {this.props.name}!</Text>
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.number,
}

export default Greeting
