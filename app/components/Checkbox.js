import React, { Component, PropTypes } from 'react'
import Icon from  'react-native-vector-icons/MaterialIcons';

export default class Checkbox extends Component {
  

  static propTypes = {
    iconName: PropTypes.string.isRequired,
    onCheckBoxPressed: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired
  }

  render() {
    const { iconName, color, onCheckBoxPressed } = this.props;

    return (
      <Icon.Button
        name={iconName}
        backgroundColor='rgba(0,0,0,0)'
        color={color}
        underlayColor='rgba(0,0,0,0)'
        size={20}
        activeOpacity={1}
        borderRadius={5}
        onPress={onCheckBoxPressed}
      >
      </Icon.Button>
    );
  }
}
