import React, {Component} from 'react';
import styles from './Search';

const ENTER_KEY = 13;

/**
 * Search - component for filtering results by query
 */
export default class Search extends Component {
  static propTypes = {
    toolbar: React.PropTypes.object.isRequired,
    searched: React.PropTypes.string.isRequired
  };

  /**
   * Handles the input change + sets the parent state
   * @param  {Object} evt - the event object
   * @return {undefined}
   */
  handleChange(evt) {
    this.props.toolbar.setState({
      query: evt.target.value
    });
  }

  /**
   * Handles the keypress on input + sends filter on ENTER
   * @param  {Object} evt - the event object
   * @return {undefined}
   */
  handleKeyDown(evt) {
    if (evt.which === ENTER_KEY) {
      this.props.toolbar.filter();
    }
  }

  /**
   * Renders search input for filtering results by query
   * @return {ReactComponent} returns search filter
   */
  render() {
    return (
      <input
        onChange={::this.handleChange}
        onKeyDown={::this.handleKeyDown}
        value={this.props.searched}
        className={styles.searchInput}
        type="text"
        placeholder="Search suppliers"/>
    );
  }
}
