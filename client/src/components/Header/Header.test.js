import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('renders without crashing', () => {
  const wrapper = shallow(<Header />);

  describe('Header', () => {
      it('exists', () => {
          expect(wrapper.find('a')).toBeTruthy;
      });
  });
});
