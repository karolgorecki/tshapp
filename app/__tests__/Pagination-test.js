import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
// Use React TestUtils as T
import {default as T} from 'react-addons-test-utils';
import Pagination from '../components/Pagination';

const pagesMock = {
  'total': 50,
  'current': 0,
  'links': {
    '0': 'page=0',
    '1': 'page=1',
    '2': 'page=2',
    '3': 'page=3',
    '4': 'page=4',
    '5': 'page=5',
    '6': 'page=6',
    '7': 'page=7',
    '8': 'page=8',
    '49': 'page=49'
  },
  'from': 0,
  'to': 9,
  'left': false,
  'right': true,
  'leftEnd': false,
  'rightEnd': true
};

describe('Pagination', ()=> {
  it('should render without errors', ()=> {
    let pgn = T.renderIntoDocument(
      <Pagination pages={{}}/>
    );

    expect(pgn).toExist();
  });

  it('should create a pagination with one disabled item and rest enabled items', ()=> {
    let pgn = T.renderIntoDocument(
      <Pagination pages={pagesMock}/>
    );

    let pgnItems = ReactDOM.findDOMNode(pgn);
    let enabledPgnItems = pgnItems.getElementsByTagName('a');
    
    expect(enabledPgnItems.length).toEqual(11);
    // the pagination is 0 based so the last page should be 49 + 1
    expect(enabledPgnItems[9].textContent).toEqual('50');
    expect(enabledPgnItems[10].textContent).toEqual('❯');
    expect(pgnItems.getElementsByTagName('span')[0].textContent).toEqual('❮');
  });
});
