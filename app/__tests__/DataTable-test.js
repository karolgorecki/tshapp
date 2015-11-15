import React from 'react';
// import ReactDOM from 'react-dom';
import expect from 'expect';
// Use React TestUtils as T
import {default as T} from 'react-addons-test-utils';

import DataTable from '../components/DataTable';

const paymentMock = [{
  'payment_supplier': 'Foo supplier',
  'payment_ref': '123',
  'payment_cost_rating': '5',
  'payment_amount': '1.49'
}];

describe('DataTable', ()=> {
  it('should render without errors', ()=> {
    let dt = T.renderIntoDocument(
      <DataTable payments={paymentMock}/>
    );

    expect(dt).toExist();
  });

  it('should render result rows', ()=> {
    let dt = T.renderIntoDocument(
      <DataTable payments={paymentMock}/>
    );
    let cols = T.scryRenderedDOMComponentsWithTag(dt, 'td');

    expect(cols[0].textContent).toEqual('Foo supplier');
    expect(cols[2].textContent).toEqual('123');
    expect(cols[3].textContent).toEqual('1.49');
  });

  it('should show a message when no results', ()=> {
    let dt = T.renderIntoDocument(
      <DataTable payments={[]}/>
    );
    let cols = T.scryRenderedDOMComponentsWithTag(dt, 'td');

    expect(cols[0].textContent).toEqual('No payments found...');
  });
});
