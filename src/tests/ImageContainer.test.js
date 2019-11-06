import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import ImageContainer from '../containers/ImageContainer';

it('renders div', () => {
  const wrapper = shallow(<ImageContainer />);
  const div = <div></div>;
  expect(wrapper).toContainReact(div);
});
