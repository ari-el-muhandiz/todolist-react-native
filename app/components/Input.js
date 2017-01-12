import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  inputText: {
    height: 50,
    padding: 15,
  }
})

export default class Input extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    addingItem: PropTypes.func.isRequired
  }

  onSubmitEditing =() => {
    const { addingItem } = this.props;
    const { text } = this.state;
    
    if(text === '') {
      return;
    }

    addingItem(text);
    
    this.setState({text: ''});
  }

  onChangeText=(text) => {
    this.setState({text});
  }

  render() {
    const {children} = this.props;
    const {text} = this.state;

    return (
      <TextInput 
        placeholder={children} 
        value={text}
        onChangeText={this.onChangeText}
        style={styles.inputText} 
        onSubmitEditing={this.onSubmitEditing}
        />
    )
  }
}
