import React from 'react';
import { shallow } from 'enzyme';
import MessageEntry from '../client/src/components/MessageEntry';

describe('MessageEntry', () => {
  it('should render', () => {
    const wrapper = shallow(<MessageEntry message={{ text: '', createdAt: '' }} />);
    expect(wrapper.find('div').length).toBe(1);
  });
  it('should render the message and timestamp', () => {
    const wrapper = shallow(<MessageEntry message={{ text: 'test message', createdAt: '1/1/2000' }} />);
    expect(wrapper.html()).toBe('<div>test message<br/>1/1/2000</div>');
  });
});
