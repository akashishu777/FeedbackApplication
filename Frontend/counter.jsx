import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from './action/actions';
import { connect } from 'react-redux';

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
    onIncreaseClick: () => dispatch(actions.increaseAction),
    onDecreaseClick: () => dispatch(actions.decreaseAction),
    onInputChange: (ev) =>{ if (ev) {dispatch(actions.inputAction(ev)) } }
  }
}

// Connected Component
const App = connect(  mapStateToProps,  mapDispatchToProps)(Counter);
export default App;