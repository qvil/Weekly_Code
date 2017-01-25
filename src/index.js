// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Custom Components
// import App from './App';
import App from './containers/App';
import counterApp from './reducers';

const store = createStore(counterApp);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
  document.getElementById('root')
);
