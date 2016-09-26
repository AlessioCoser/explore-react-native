/**
 * @providesModule movie
 */

import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'

class Movie extends Component {
  render() {
    return <Text>{this.props.title} | {this.props.releaseYear}</Text>
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  releaseYear: PropTypes.string,
}

export default Movie
