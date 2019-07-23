import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
	constructor(props) {
    super(props);
    this.state = {
      lastName: '',
      /* Initialize all text fields with empty strings. */
    }
    this.onChange = this.onChange.bind(this);
	}
  onChange(e) {
    const { onInputChange } = this.props
    this.setState({ [e.target.name]: e.target.value })
    onInputChange(e.target.value);
  }

  render() {
    
    const { value, onIncreaseClick, onDecreaseClick, text } = this.props
    const { lastName } = this.state;
 
    return (
      <div>
        <span>{value}</span>
         <button onClick={onIncreaseClick}>Increase</button> 
         <button onClick={onDecreaseClick}>Decrease</button> 
        <div>
          From Redux: <p>{text}</p>
          From State: <p>{this.state.lastName}</p>
          Enter:     
          <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.onChange}
        />
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
}

// Action
const increaseAction = { type: 'increase' }
const decreaseAction = { type: 'decrease' }
const inputAction = text => ({
  type: 'input', 
  payload: text
})

// Reducer
function counter(state = { count: 0, text: 'Default' }, action) {
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

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count,
    text: state.text
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction),
    onInputChange: (ev) =>{ if (ev) {dispatch(inputAction(ev)) } }
  }
}

// Connected Component
const App = connect(  mapStateToProps,  mapDispatchToProps)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
