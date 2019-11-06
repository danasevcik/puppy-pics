import React from 'react';
import ReactDOM from 'react-dom';
import BreedsContainer from './BreedsContainer';

it('renders breeds container div and heading tag', () => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  ReactDOM.render(<BreedsContainer />, div);
  ReactDOM.render(<BreedsContainer />, h2);
  ReactDOM.unmountComponentAtNode(div);
  ReactDOM.unmountComponentAtNode(h2);
});
