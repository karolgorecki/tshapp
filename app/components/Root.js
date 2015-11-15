import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from './App';

let history = createBrowserHistory();

/**
 * Root wraps the {@link App} component with a router  
 * We Render this component to the HTML to #app-view
 */
export default class Root extends Component {
  /**
   * @return {ReactComponent} returns app wrapped with a router
   */
  render() {
    return(
      <Router history={history}>
        <Route path="/" component={App}/>
      </Router>
    );
  }
}
