import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
// Use React TestUtils as T
import {default as T} from 'react-addons-test-utils';
import Toolbar from '../components/Toolbar';

const tlbrMock = {
  rating: '2',
  query: 'Foo'
};

describe('Toolbar', ()=> {
  it('should render without errors', ()=> {
    let tlbr = T.renderIntoDocument(
      <Toolbar history={{}} filters={{}}/>
    );

    expect(tlbr).toExist();
  });

  it('should create items with filled values for pound rating & query input', ()=> {
    let tlbr = T.renderIntoDocument(
      <Toolbar history={{}} filters={tlbrMock}/>
    );

    let tlbrCtn = ReactDOM.findDOMNode(tlbr);
    let tlbrInput = tlbrCtn.getElementsByTagName('input');
    let tlbrOptions = tlbrCtn.getElementsByTagName('option');
    // check if the input is prefilled
    expect(tlbrInput[0].getAttribute('value')).toEqual('Foo');
    // check if the select has selected value 2
    expect(tlbrOptions[2].hasAttribute('selected')).toBe(true);
  });
});
