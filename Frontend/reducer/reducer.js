// Reducer
export default function counterReducer(state = { count: 0, text: 'Default' }, action) {
    const count = state.count;
    switch (action.type) {
      case 'increase':
        return Object.assign({}, state, { count: count+1 });
      case 'decrease':
          return Object.assign({}, state, { count: count-1 });
      case 'input':
        return Object.assign({}, state, { text: action.payload });
      default:
        return state
    }
  }
