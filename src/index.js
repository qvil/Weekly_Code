// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Custom Components
import App from './containers/App';
import mafiaApp from './reducers';

const store = createStore(mafiaApp);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
  document.getElementById('root')
);
