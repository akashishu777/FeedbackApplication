import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../action/actions';
import { connect } from 'react-redux';
import axios from 'axios';
// React component
class Counter extends Component {
	constructor(props) {
    super(props);
    this.state = {
      shouldShow: true,
      /* Initialize all text fields with empty strings. */
    }
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      axios.get('http://10.90.11.37:3000/api/test')
        .then(response => {
            console.log(response.data);
            this.setState({ shouldShow: response.data});
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
    handleSubmit(e) {
      console.log('button is clicked' + e.target.value);
      var self = this;
      axios({
        method: 'post',
        url: 'http://10.90.11.37:3000/api/vote',
        data: {vote: e.target.value},
        config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            self.setState({ shouldShow: false});
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }
    onChange(e) {
    const { onInputChange } = this.props
    this.setState({ [e.target.name]: e.target.value })
    onInputChange(e.target.value);
  }

  render() {  
    const centered = {
        height: '100vh', /* Magic here */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const { value, onIncreaseClick, onDecreaseClick, text } = this.props;
    const { shouldShow } = this.state;
    const feedbackComp = ( <div style={{}}>
                                 <h3 style={{ fontSize:'30px', fontFamily: "sans-serif", color: "white", letterSpacing: '0px'}}>Conditional settings allow you to define the appearance!</h3>
                                  <p>{shouldShow}</p>
                                  <div style={{justifyContent: 'center',
                                            alignItems: 'center',
                                            display: 'flex'}}>
                                    <button style= {{marginRight: '5px',
                                    display:'inline-block',
                                     padding:'0.3em 1.2em',
                                     margin:'0 2.0em 0.3em 0',
                                     borderRadius:'2em',
                                     boxSizing: 'border-box',
                                     textDecoration:'none',
                                     fontFamily:'Roboto',
                                     fontWeight:'300',
                                     color:'#FFFFFF',
                                     backgroundColor:'#4eb5f1',
                                     textAlign:'center',
                                     transition: 'all 0.2s'
                                  }}   onClick={this.handleSubmit} value="true">Yes</button> 
                                      <button style= {{
                                      display:'inline-block',
                                       padding:'0.3em 1.2em',
                                       margin:'0 0.3em 0.3em 0',
                                       borderRadius:'2em',
                                       boxSizing: 'border-box',
                                       textDecoration:'none',
                                       fontFamily:'Roboto',
                                       fontWeight:'300',
                                       color:'#FFFFFF',
                                       backgroundColor:'#4eb5f1',
                                       textAlign:'center',
                                       transition: 'all 0.2s'
                                    }} onClick={this.handleSubmit} value="false">No</button> 
                                </div>
                           </div>);

    var show = shouldShow ? feedbackComp : (<h3 style={{ fontSize:'30px', fontFamily: "sans-serif", color: "white", letterSpacing: '0px'}}>Thank you for your response :)</h3>);
    return (
          <div style={{height: '100%', /* Magic here */
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'}}>
              {show}
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