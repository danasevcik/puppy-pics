import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import BreedsContainer from '../containers/BreedsContainer';

it('renders heading tag', () => {
  const wrapper = shallow(<BreedsContainer />);
  const header = <h2>Please choose a breed:</h2>;
  expect(wrapper).toContainReact(header);
});
