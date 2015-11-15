import React, {Component} from 'react';
import styles from './App';

// Get CSS for global, reset and font styles
import {} from '../../css/global';
import {} from '../../css/reset.css';
import {} from '../../css/fonts';

// Get app components
import DataTable from '../DataTable';
import Toolbar from '../Toolbar';
import Header from '../Header';
import Pagination from '../Pagination';

const API_URL = 'http://test-api.kuria.tshdev.io/index.php';
const API_ERROR = 'An error occured!';

/**
 * App is the main component that contains other parts of the application.
 */
export default class App extends Component {
  static propTypes = {
    location: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired
  };

  /**
   * constructor
   * @param {Object} props - the parent props
   * @return {undefined}
   */
  constructor(props) {
    super(props);

    /**
     * The main App state  
     * it holds the payments & pagination data from the API
     * @type {Object}
     * @property {Object[]} state.payments - is a list of returned payments from the API 
     * @property {Object} state.pagination - contains information about the pagination
     */
    this.state = {
      payments: [],
      pagination: {}
    };

    // Watch for route changes
    this.props.history.listen(::this.changeRoute);
  }

  /**
   * Maps the router route to the API calls
   * @param  {Object} state - holds the route state
   * @param  {Object} route - holds the route informations
   * @return {undefined}
   */
  changeRoute(state, route) {
    $.ajax({
      url: `${API_URL}${route.location.search}`,
      type: 'get',
      dataType: 'json',
      success: ::this.setPayments,
      error: ::this.handleError
    });
  }

  /**
   * Handles error when getting data from API
   * @param  {Object} data - returned data
   * @return {undefined}
   */
  handleError(data) {
    // We don't have any results
    if (data.responseText === API_ERROR) {
      this.setState({
        payments: [],
        pagination: {}
      });
    }
  }

  /**
   * Handles the success response when getting data from API  
   * It sets the state of the payments & pagination
   * @param {Object} data - the payments & pagination information
   * @return {undefined}
   */
  setPayments(data) {
    this.setState({
      payments: data.payments,
      pagination: data.pagination 
    });
  }

  /**
   * Render the App component
   * @return {ReactComponent} returns whole application with all components
   */
  render() {
    return(
      <div className={styles.container}>
        <Header/>
        <Toolbar history={this.props.history} filters={this.props.location.query}/>
        <DataTable payments={this.state.payments}/>
        <Pagination pages={this.state.pagination}/>
      </div>
    );
  }
}
