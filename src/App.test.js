import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('404', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toBeTruthy();
  });
});
