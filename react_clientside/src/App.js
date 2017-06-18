import React, { Component } from 'react';
import {AppContainer} from 'react-hot-loader';
import {composeWithDevTools} from 'redux-devtools-extension';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

import Home from './components/Home';
import Layout from './components/Layout';
import Signup from './components/Signup';
import Login from './components/Login';
import Nav from './components/Nav';
import RealDashboard from './components/real_dashboard';

// import Customize from './components/customize';

const store = createStore(
                rootReducer,
                composeWithDevTools(
                  applyMiddleware(thunk)
                )
              );

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store} >
          <Router>
            <div>
            <Nav />
              <Route exact path='/' component={Home}>
              </Route>
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              {/* Need to change layout */}
              <Route path='/create-trip' component={Layout}>
              <Route path='/real-dashboard' component={RealDashboard} />
              </Route>
            </div>
          </Router>
        </Provider>
      </AppContainer>

    );
  }
}
