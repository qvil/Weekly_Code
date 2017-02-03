// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mafiaApp from './reducers';
// Custom Components
import App from './containers/App';
import SignIn from './containers/SignIn';
import MainPage from './containers/MainPage';

const store = createStore(mafiaApp);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {/* <Route path="/" component={MainPage} /> */}
            <Route path="/" component={App} />
            <Route path="/signin" component={SignIn} />
        </Router>
    </Provider>,
  document.getElementById('root')
);
