import React, {Component} from 'react';
import styles from './Header';

/**
 * Header component
 */
export default class Header extends Component {
  /**
   * Renders a header with title and leading text
   * @return {ReactComponent} returns a header component
   */
  render() {
    return(
      <div>
        <h1 className={styles.title}>Where your money goes</h1>
        <p className={styles.lead}>
          Payments made by Chichester District Council to individual suppliers
          with a value over £500 made within October.
        </p>
        <hr className={styles.separator}/>
      </div>
    );
  }
}
