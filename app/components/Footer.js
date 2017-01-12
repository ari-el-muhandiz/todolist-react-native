import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    backgroundColor: 'whitesmoke'
  },
  text: {
    color: 'red',
    padding: 10
  }
})

export default class Footer extends Component {
  static propTypes = {
    clearCompleted: PropTypes.func.isRequired
  }

  render() {
    return (
      <TouchableOpacity style={styles.footer} onPress={this.props.clearCompleted}>
        <Text style={styles.text}>Remove completed items</Text>
      </TouchableOpacity>
    )
  }
}
