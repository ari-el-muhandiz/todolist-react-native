import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import Title from '../components/Title';
import Input from '../components/Input';
import Footer from '../components/Footer';
import List from '../components/List';

import { actionCreators } from '../redux/todoRedux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  handleAddingItem = (text) => {
    const{dispatch} = this.props;
    dispatch(actionCreators.addItem({text, completed: false}));
  }

  handleToggleItem = (i) => {
    const{ dispatch } = this.props;
    dispatch(actionCreators.toggleCompleted(i));
  }

  handleRemoveItem = (i) => {
    const{dispatch} = this.props;
    dispatch(actionCreators.removeItem(i));
  }

  handleClearCompleted = () => {
    const{dispatch} = this.props;
    dispatch(actionCreators.removeCompletedItems());
  }

  render() {
    const {items} = this.props;

    return (
      <View style={styles.container}>
        <Title>Todo List</Title>
        <Input addingItem={this.handleAddingItem}>Enter an item!</Input>
        <List items={items} removeItem={this.handleRemoveItem} toggleItem={this.handleToggleItem}/>
        <Footer clearCompleted={this.handleClearCompleted}/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
