import React, {Component} from 'react';
import styles from './Rating';

/**
 * Rating - component for creating rating icons
 */
export default class Rating extends Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    max: React.PropTypes.string.isRequired
  };

  /**
   * Render rating icons + a render text value that could be used in a RWD mode
   * @return {ReactComponent} returns rating
   */
  render() {
    let {value, max} = this.props;

    value = parseInt(value, 10);
    max = parseInt(max, 10);

    let rating = [];

    for (let i = 0; i < max; i++) {
      if (i < value) {
        rating.push(<span className={styles.on} key={i}>&pound;</span>);
        continue;
      }
      rating.push(<span className={styles.off} key={i}>&pound;</span>);
    }

    return (
      <div className={styles.container}>
        {rating}
        <span className={styles.rwdRating}>{value}</span>
      </div>
    );
  }
}
