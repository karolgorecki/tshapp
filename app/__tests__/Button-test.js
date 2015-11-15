import React from 'react';
import expect from 'expect';
// Use React TestUtils as T
import {default as T} from 'react-addons-test-utils';
import Button from '../components/Button';

describe('Button', ()=> {
  it('should render without errors', ()=> {
    let btn = T.renderIntoDocument(
      <Button>test</Button>
    );

    expect(btn).toExist();
  });

  it('should have text "Foo"', ()=> {
    let btn = T.renderIntoDocument(
      <Button>Foo</Button>
    );
    let btnNode = T.findRenderedDOMComponentWithTag(btn, 'a');

    expect(btnNode.textContent).toEqual('Foo');
  });

  it('should have default class when no type given', ()=> {
    let btn = T.renderIntoDocument(
      <Button>Foo</Button>
    );
    let btnNode = T.findRenderedDOMComponentWithTag(btn, 'a');

    expect(btnNode.className)
      .toEqual('components-Button---Button__default components-Button---Button___baseButton');
  });

  it('should have class "active"', ()=> {
    let btn = T.renderIntoDocument(
      <Button type="action">Foo</Button>
    );
    let btnNode = T.findRenderedDOMComponentWithTag(btn, 'a');

    expect(btnNode.className)
      .toEqual('components-Button---Button__action components-Button---Button___baseButton');
  });

  it('should be have href="http://example.com"', ()=> {
    let btn = T.renderIntoDocument(
      <Button href="http://example.com">test</Button>
    );
    let btnNode = T.findRenderedDOMComponentWithTag(btn, 'a');

    expect(btnNode.getAttribute('href')).toBe('http://example.com');
  });

  it('should call a method "foo" after click', ()=> {
    let mock = {
      foo: ()=> {}
    };
    let spy = expect.spyOn(mock, 'foo');
    let btn = T.renderIntoDocument(
      <Button onClick={mock.foo}>test</Button>
    );
    let btnNode = T.findRenderedDOMComponentWithTag(btn, 'a');

    T.Simulate.click(btnNode);
    expect(spy).toHaveBeenCalled();

    spy.restore();
    expect.restoreSpies();
  });
});

