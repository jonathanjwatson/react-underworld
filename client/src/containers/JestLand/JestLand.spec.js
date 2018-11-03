import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JestLand from './JestLand';
import { isThisHour } from 'date-fns';

configure({ adapter: new Adapter() });

describe('renders without crashing', () => {
  const wrapper = shallow(<JestLand />);

  describe('h1', () => {
      it('exists', () => {
          expect(wrapper.find('h1')).toBeTruthy;
      });
  });

  // describe('button functionality', () => {
  //   it('exists', () => {
  //     expect(app.find('button')).toBeTruthy;
  //   });
  //   it('calls window.print on click', () => {
  //     global.print = jest.fn();
  //     const button = app.find('button');
  //     button.simulate('click');
  //     expect(window.print).toHaveBeenCalled();
  //   });
  // });
});
