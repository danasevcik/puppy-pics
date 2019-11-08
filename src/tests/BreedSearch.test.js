import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import BreedSearch from '../components/BreedSearch';

it('renders breed search html', () => {
  const wrapper = shallow(<BreedSearch />);
  const onChange = jest.fn();
  const onClick = jest.fn();
  const div = (
    <div>
      <input
        type='name'
        id='search-field'
        value=''
        placeholder='Search For a Breed'
        onChange={onChange}/>
      <br/>
      <input
        type='submit'
        id='all-breeds-button'
        value='See All Breeds'
        onClick={onClick}
      />
    </div>);
  expect(wrapper).toMatchElement(div);
});
