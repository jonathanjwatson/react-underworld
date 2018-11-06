import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JestLand from './JestLand';

configure({ adapter: new Adapter() });

describe('renders', () => {
  const wrapper = shallow(<JestLand />);

  describe('h1', () => {
      it('exists', () => {
          expect(wrapper.find('h1')).toBeTruthy;
      });
  });
});
