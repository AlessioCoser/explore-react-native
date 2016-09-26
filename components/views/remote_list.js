
import React, { Component, PropTypes } from 'react'
import { Text, ListView, View, Button } from 'react-native'
let Element = React.createElement

class RemoteList extends Component {
  constructor(props) {
    super(props)
    const items = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = { items: items.cloneWithRows([]) }

    this.fetchItems()
  }

  fetchItems() {
    const items = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    return fetch(this.props.from)
    .then((response) => response.json())
    .then((responseJson) => {
      var itm = responseJson

      if(responseJson[this.props.root] != null) {
        itm = responseJson[this.props.root]
      }

      this.setState({items: items.cloneWithRows(itm) })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  renderRow(movie) {
    return Element(this.props.item, movie);
  }

  render () {
    return (
      <View>
        <ListView
          dataSource={this.state.items}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    )
  }
}

RemoteList.propTypes = {
  item: PropTypes.object.isRequired,
  from: PropTypes.string.isRequired,
  root: PropTypes.string,
  interval: PropTypes.number
}

export default RemoteList
