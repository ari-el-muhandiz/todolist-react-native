import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  complete: {
    backgroundColor: 'gainsboro',
  },
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
    flexDirection: 'row', 
    alignItems: 'center',
    flex: 1
  }
})

export default class List extends Component {
  
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    removeItem: PropTypes.func.isRequired
  }

  _onCheckBoxPressed = (i) => {
    const { toggleItem } = this.props;
    requestAnimationFrame(() => {
      toggleItem(i);
    });
  }

  _onRemoveItemPressed = (i) =>{
    const { removeItem } = this.props;
    requestAnimationFrame(() => {
      removeItem(i);
    });
  }

  renderItem= (item, i) => {
      const {text, completed} = item;
      let color = completed ? '#C5C8C9' : '#000';
      let iconName = completed ? 'check-box': 'check-box-outline-blank';
      
      return(
          <View style={styles.item} key={i}>
            <Text style={{flex:.8}}>{text}</Text>
            <View style={{flex:.2, flexDirection: 'row', alignItems: 'center'}}>
              <Checkbox iconName={iconName} color={color} onCheckBoxPressed={() => { this._onCheckBoxPressed(i) }}></Checkbox>
              <TouchableOpacity onPress={() => { this._onRemoveItemPressed(i) }}>
                <Text style={{color: 'red',  padding: 5, fontSize: 16}}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
      )
  }

  render() {
    const {items} = this.props;
    return (
      <ScrollView scrollEnabled={true}
                  showsVerticalScrollIndicator={true}
                  keyboardShouldPersistTaps={true}
                  keyboardDismissMode='on-drag'
      >
        {
          items.map(this.renderItem)
        }
      </ScrollView>
    )
  }
}
