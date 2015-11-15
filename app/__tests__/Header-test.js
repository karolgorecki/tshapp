import React from 'react';
import expect from 'expect';
// Use React TestUtils as T
import {default as T} from 'react-addons-test-utils';
import Header from '../components/Header';

describe('Header', ()=> {
  it('should render without errors', ()=> {
    let hdr = T.renderIntoDocument(
      <Header/>
    );

    expect(hdr).toExist();
  });

  it('should have a title and lead text', ()=> {
    let hdr = T.renderIntoDocument(
      <Header/>
    );
    let title = T.findRenderedDOMComponentWithTag(hdr, 'h1');
    let lead = T.findRenderedDOMComponentWithTag(hdr, 'p');

    expect(title.textContent).toEqual('Where your money goes');
    expect(lead.textContent)
      .toEqual('Payments made by Chichester District Council ' +
      'to individual suppliers with a value over £500 made within October.');
  });
});
