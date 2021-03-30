import React from 'react';
import { shallow } from 'enzyme';
import FourOhFour from '../fourOhfour';
import ErrorImage from '../../../public/404.png';

describe('404', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<FourOhFour errorImage={ErrorImage} />);

    expect(wrapper).toBeTruthy();
  });
});