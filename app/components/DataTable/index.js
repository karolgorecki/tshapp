import React, {Component} from 'react';
import styles from './DataTable';
import Row from './Row';

/**
 * DataTable creates table with rows of payments
 */
export default class DataTable extends Component {
  static propTypes = {
    payments: React.PropTypes.array.isRequired
  };
  
  /**
   * Returns a data table with payments
   * @return {ReactComponent} returns DataTable
   */
  render() {
    let rows;
    if (!this.props.payments.length) {
      rows = <tr><td className={styles.noResults} colSpan="4">No payments found...</td></tr>;
    } else {        
      rows = this.props.payments.map((payment, idx)=>{
        return <Row key={idx} data={payment}/>;
      });
    }

    return (
      <div>
        <table className={styles.bordered}>
          <thead>
            <tr>
              <th>Supplier</th>        
              <th>Pound Rating</th>
              <th>Reference</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {rows}      
          </tbody>
        </table>
      </div>
    );
  }
}
