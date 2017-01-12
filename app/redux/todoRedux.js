const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
  REMOVE_COMPLETED_ITEMS: 'REMOVE_COMPLETED_ITEMS'
}

export const actionCreators = {
  addItem: (todo) => {
    return {
      type: types.ADD_ITEM,
      payload: todo
    }
  },
  removeItem: (index) => {
    return {
      type: types.REMOVE_ITEM,
      payload: index
    }
  },
  toggleCompleted: (index) => {
    return {
      type: types.TOGGLE_ITEM_COMPLETED,
      payload: index
    }
  },
  removeCompletedItems: () => {
    return {
      type: types.REMOVE_COMPLETED_ITEMS
    }
  }
}

const initialState = {
  items: [],
}

export const reducer = (state = initialState, action) => {
  const {items} = state;
  const {type, payload} = action

  switch(type) {
    case types.ADD_ITEM: {
      return {
        ...state,
        items: [payload, ...items]
      }
    }
    case types.REMOVE_ITEM: {
      return {
        ...state,
        items: items.filter((item, i) => {
          return i !== payload;
        })
      }
    }
    case types.TOGGLE_ITEM_COMPLETED: {
      return {
        ...state,
        items: items.map((item, i) => { 
          if(i !== payload) {
            return item;
          }
          return {...item, completed: !item.completed}
        })
      }
    }
    case types.REMOVE_COMPLETED_ITEMS: {
      return {
        ...state,
        items: items.filter((item, i) => { 
          return !item.completed 
        })
      }
    }
    default: {
      return state
    }
  }
}
