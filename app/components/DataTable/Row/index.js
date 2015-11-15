import React, {Component} from 'react';
import styles from './Modal';
// Import the modal for showing the content details
import Modal from 'react-modal';
// Import Rating for showing the pound rating
import Rating from '../../Rating';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(86, 170, 225, 0.8)'
  },
  content: {
    padding: 50,
    border: '3px solid #56a9e2'
  }
};

/**
 * Represents single row in the {@link DataTable} component
 */
export default class Row extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  };

  /**
   * constructor
   * @param  {Object} props - the parent props
   * @return {undefined}
   */
  constructor(props) {
    super(props);

    /**
     * The single row state holds info about modal
     * @type {Object}
     * @property {Object} state.modal - determines if we should show/hide modal
     */
    this.state = {
      modal: false
    };
  }

  /**
   * Handles the open modal action (set state.modal to true)
   * @return {undefined}
   */
  openModal() {
    this.setState({modal: true});
  }

  /**
   * Handles the close modal action (set state.modal to false)
   * @return {undefined}
   */
  closeModal() {
    this.setState({modal: false});
  }

  /**
   * Render the single row for DataTable
   * @return {ReactComponent} returns single row
   */
  render() {
    let row = this.props.data;

    return (
      <tr onClick={::this.openModal}>
        <td>
          <Modal
            style={modalStyles}
            isOpen={this.state.modal}
            onRequestClose={::this.closeModal}>
            <span onClick={::this.closeModal} className={styles.close}>
              &times;
            </span>
            <h1 className={styles.title}>{row.payment_supplier}</h1>
            <hr className={styles.separator}/>
            <div className={styles.property}>
              <span className={styles.label}>reference</span>
              <span className={styles.value}>#{row.payment_ref}</span>
            </div>
            <div className={styles.property}>
              <span className={styles.label}>ammount</span>
              <span className={styles.value}>&pound;{row.payment_amount}</span>
            </div>
            <div className={styles.property}>
              <span className={styles.label}>cost rating</span>
              <span className={styles.value}>{row.payment_cost_rating}</span>
            </div>
          </Modal>
          {row.payment_supplier}
        </td>
        <td>
          <Rating value={row.payment_cost_rating} max="5"/>
        </td>
        <td>
          {row.payment_ref}
        </td>
        <td>
          {row.payment_amount}
        </td>
      </tr>
    );
  }
}
