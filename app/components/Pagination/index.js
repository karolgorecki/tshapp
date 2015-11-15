import React, {Component} from 'react';
import styles from './Pagination';
// Import Button for generating the pagination items
import {Link} from 'react-router';

/**
 * Pagination component  
 * It's used to generate pagination items.   
 * We are using {@link Button} component as pagination elements.
 */
export default class Pagination extends Component {
  static propTypes = {
    pages: React.PropTypes.object.isRequired
  };

  /**
   * Creates pagination arrow button
   * @param  {String} direction - tells which arrow to generate (prev/next)
   * @return {ReactComponent} - returns prev/next pagination button
   */
  createPaginationArrow(direction = 'left') {
    let buttonNode;
    let buttonIdx;
    let buttonArrow = (direction === 'left') ? '❮' : '❯';
    let clickable = this.props.pages[direction];

    if (direction === 'left') {
      buttonIdx = parseInt(this.props.pages.current, 10) - 1;
    } else {
      buttonIdx = parseInt(this.props.pages.current, 10) + 1;
    }

    if (clickable) {
      buttonNode = (
        <Link
          to={`/?${this.props.pages.links[buttonIdx]}`}
          className={styles.paginationArrow}>
          {buttonArrow}
        </Link>);
    } else {
      buttonNode = (
        <span
          className={styles.paginationArrowOff}>
          {buttonArrow}
        </span>);
    }
    return buttonNode;
  }

  /**
   * Creates the pagination buttons
   * @return {ReactComponent} returns pagination buttons
   */
  createPaginationItems() {
    let paginationNodes = $.map(this.props.pages.links, (link, pageOffset)=> {
      let pageNumber = parseInt(pageOffset, 10) + 1;
      let linkClass;

      if (parseInt(this.props.pages.current, 10) === parseInt(pageOffset, 10)) {
        linkClass = styles.paginationActive;
      } else {
        linkClass = styles.pagination;
      }

      return (
        <Link
          className={linkClass}
          to={`/?${link}`}
          key={pageNumber}>
          {pageNumber}
        </Link>
      );
    });
    return paginationNodes;
  }

  /**
   * Renders pagination if there are at least 2 pages of results
   * @return {ReactComponent} returns pagination component
   */
  render() {
    // Check if we have already pagination data
    if (!Object.keys(this.props.pages).length) {
      return null;
    }

    // Don't render pagination, if there is only one page
    if (this.props.pages.total <= 5) {
      return null;
    }

    
    let prevButton = this.createPaginationArrow('left');
    let nextButton = this.createPaginationArrow('right');
    let PaginationNodes = this.createPaginationItems();

    return (
      <div className={styles.container}>
        {prevButton}       
        {PaginationNodes}
        {nextButton}
      </div>
    );
  }
}
