import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
// Use React TestUtils as T
import {default as T} from 'react-addons-test-utils';
import Rating from '../components/Rating';

describe('Rating', ()=> {
  it('should render without errors', ()=> {
    let rtg = T.renderIntoDocument(
      <Rating value="1" max="5"/>
    );

    expect(rtg).toExist();
  });

  it('should create rating items', ()=> {
    let rtg = T.renderIntoDocument(
      <Rating value="2" max="5"/>
    );

    let rtgCtn = ReactDOM.findDOMNode(rtg);
    let rtgItemsOn = rtgCtn
      .getElementsByClassName('components-Rating---Rating__on ' +
        'components-Rating---Rating__ratingItem');

    let rtgItemsOff = rtgCtn
      .getElementsByClassName('components-Rating---Rating__off ' +
        'components-Rating---Rating__ratingItem');

    expect(rtgItemsOff.length).toEqual(3);
    expect(rtgItemsOn.length).toEqual(2);
  });
});
