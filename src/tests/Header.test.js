import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../components/Header';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';



test('Rendering Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('li').length).toBe(3);
    expect(toJson(wrapper)).toMatchSnapshot();
});
