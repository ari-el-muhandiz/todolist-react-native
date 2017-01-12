import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 15
  },
  title: {
    color: 'white',
    textAlign: 'center'
  }
})

export default class Title extends Component {
  static propType = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{this.props.children}</Text>
      </View>
    )
  }
}
