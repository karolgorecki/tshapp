import React, {Component} from 'react';
import styles from './Button';

/**
 * Component for creating buttons  
 * 
 * @example <caption>Simple button</caption>
 * <Button>Foo</Button>
 *
 * @example <caption>Button with different styles & custom href attr</caption>
 * <Button href="#custom-path" type="action">Bar</Button>
 * NOTE:
 * The button type should point to an existing class in Button.css styles  
 * Type "action" will point to ".action" selector
 */
export default class Button extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    type: React.PropTypes.string,
    href: React.PropTypes.string,
    disabled: React.PropTypes.bool
  };
  
  /**
   * Render the button to HTML
   * @return {ReactElement} returns a button node
   */
  render() {
    let {
      type: buttonType,
      href: buttonHref
    } = this.props;

    let buttonClass = buttonType ? styles[buttonType] : styles.default;

    return (
      <a
        {...this.props}
        className={buttonClass}
        href={buttonHref ? buttonHref : '#'}>
          {this.props.children}
      </a>
    );
  }
}
