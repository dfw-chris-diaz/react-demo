import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
//for production
//import { Router, Route, browserHistory } from 'react-router';
import App from '../containers/App';
import RouteToTab1 from '../components/routeToTab1';
import configureStore from "../store/configStore"; 

const store = configureStore();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/*for production*/}
        {/*<Router history={browserHistory}>*/}
        <Router history={hashHistory}>
          <Route path="/" component={App} />
          <Route path="/Tab1" component={RouteToTab1} />
        </Router>
      </Provider>
    )
  }
}