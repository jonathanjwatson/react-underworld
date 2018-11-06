import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthorizationLand from './AuthorizationLand';

configure({ adapter: new Adapter() });

describe('renders', () => {
  const wrapper = shallow(<AuthorizationLand />);

  describe('h1', () => {
      it('exists', () => {
          expect(wrapper.find('h1')).toBeTruthy;
      });
  });
});
