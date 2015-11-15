import React, {Component} from 'react';
import styles from './Filter';

/**
 * Creates a select component for filter the pound rating
 */
export default class Filter extends Component {
  static propTypes = {
    toolbar: React.PropTypes.object.isRequired,
    rating: React.PropTypes.string.isRequired
  };

  /**
   * Handles the change of the select
   * @param  {Object} evt - the event object
   * @return {undefined}
   */
  handleChange(evt) {
    this.props.toolbar.setState({
      rating: evt.target.value
    });
  }

  /**
   * Funciton for creating options for the select
   * @param  {Number} options - number of options to generate
   * @return {ReactComponent} optionNodes - returns the options
   */
  createOptionNodes(options = 5) {
    let optionsToGenerate = options + 1;
    let optionNodes = [];

    optionNodes.push(
      <option key="0" value="">Select pound rating</option>
    );

    for (let i = 1; i < optionsToGenerate; i++) {
      optionNodes.push(
        <option key={i} value={i}>{i}</option>
      );
    }    
    return optionNodes;
  }

  /**
   * Render the select filter
   * @return {ReactComponent} returns a filter component
   */
  render() {
    return (
      <div className={styles.container}>
        <select onChange={::this.handleChange} className={styles.filter} value={this.props.rating}>
          {this.createOptionNodes()}
        </select>
      </div>
    );
  }
}
