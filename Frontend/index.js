import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import App from './components/counter.jsx';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
