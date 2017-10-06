/**
 * SelectionPresenter.test.js
 *
 * Jest API
 * @see https://facebook.github.io/jest/docs/expect.html#content
 *
 * Enzyme API
 * @see http://airbnb.io/enzyme/docs/api/shallow.html
 *
 * How to test a React Component basing on a "Contract":
 * @see https://medium.freecodecamp.com/the-right-way-to-test-react-components-548a4736ab22#.hqprrvawg
 */

/* eslint-env jest */
import React from 'react';
import { render } from 'react-dom';
import { shallow, mount } from 'enzyme';
import SelectionPresenter from './SelectionPresenter';

// const withStyles = withStyles();
const shallowWithContext = node => shallow(node, {context: {withStyles}});

describe('Default states, styles, and behaviors', () => {
  it('renders without crashing', () => {
    const root = document.createElement('div');
    render(
      <SelectionPresenter
        isFocused={true}
        isOpen={true}
        disabled={false}
        hintText={'Hint Text'}
        errorText={'Error Text'}
        // selectedValues={this.state.selectedItems}
        // selectionsRenderer={selectionsRenderer}
        floatingLabel={'Floating Label'}
        // floatingLabelStyle={floatingLabelStyle}
        // floatingLabelFocusStyle={floatingLabelFocusStyle}
        // underlineStyle={underlineStyle}
        // underlineFocusStyle={underlineFocusStyle}
      />
    , root)
  });

  it('expects the component to exist', () => {
    const wrapper = shallow(<SelectionPresenter />);
    console.log(wrapper.props());
    // can also use wrapper.state('isOpen')
  });

});

/*
describe('', () => {
  it('')

  it('')
})
*/
