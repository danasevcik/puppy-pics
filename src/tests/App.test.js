import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import App from '../App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const welcomeMessage = <h1>Welcome To Puppy Pics <span><img id='paw-pic' src='https://cdn2.iconfinder.com/data/icons/miscellanea-set-4/100/_-4-512.png' alt='paw print'/></span></h1>
  expect(wrapper).toContainReact(welcomeMessage);
});
