import * as React from 'react';
import { mount, shallow } from 'enzyme';

import App, { doIncrement, doDecrement } from '.';

describe('App', () => {
  describe('state', () => {
    it('should increment the counter in state', () => {
      const state = { counter: 0 };
      const newState = doIncrement(state);

      expect(newState.counter).toEqual(1);
    });

    it('should decrement the counter in state', () => {
      const state = { counter: 0 };
      const newState = doDecrement(state);

      expect(newState.counter).toEqual(-1);
    });
  });

  describe('component', () => {
    const component = shallow(<App title="Foo Bar" />);

    it('renders the component with the correct element', () => {
      expect(component.type()).toEqual('div');
    });

    it('has the title in props', () => {
      expect(component.contains('Foo Bar')).toEqual(true);
    });

    it('has all class names', () => {
      expect(component.find('.app-header')).toHaveLength(1);
      expect(component.find('.app-content')).toHaveLength(1);
    });
  });
});
