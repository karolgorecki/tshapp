import React, {Component} from 'react';
import styles from './Toolbar.css';
// Import components for toolbar
import Search from '../Search';
import Filter from '../Filter';
import Button from '../Button';

/**
 * Toolbar component is used to filter the {@link DataTable} results
 */
export default class Toolbar extends Component {
  static propTypes = {
    filters: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired
  };

  /**
   * constructor
   * @param  {Object} props - the parent props
   * @return {undefined}
   */
  constructor(props) {
    super(props);

    /**
     * Hold the filtering state
     * @type {Object}
     * @property {String} state.rating - contains current rating filter value 
     * @property {String} state.query - contains current query filter value
     */
    this.state = {
      rating: '',
      query: ''
    };
  }

  /**
   * Set filters to filters from URL (if any) 
   * @return {undefined}
   */
  componentWillMount() {
    if ('query' in this.props.filters) {
      this.setState({query: this.props.filters.query});
    }

    if ('rating' in this.props.filters) {
      this.setState({rating: this.props.filters.rating});
    }
  }

  /**
   * Handler for the reset click
   * @param  {Object} evt - the event object
   * @return {undefined}
   */
  reset(evt) {
    evt.preventDefault();
    this.props.history.pushState(null, '/');
    this.setState({rating: '', query: ''});
  }

  /**
   * Filter the results
   * @return {undefined}
   */
  filter() {
    this.props.history.pushState(null, '/', this.state);
  }

  /**
   * Handle the search click
   * @param  {Object} evt - the event object
   * @return {undefined}
   */
  handleSearch(evt) {
    evt.preventDefault();
    this.filter();
  }

  /**
   * Renders a toolbar for filtering results
   * @return {ReactComponent} returns toolbar
   */
  render() {
    return(
      <div className={styles.container}>
        <Search toolbar={this} searched={this.state.query}/>
        <Filter toolbar={this} rating={this.state.rating}/>
        <Button onClick={::this.reset}>Reset</Button>
        <Button onClick={::this.handleSearch} type="action">Search</Button>
      </div>
    );
  }
}
