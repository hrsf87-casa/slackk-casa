import React from 'react';
import { shallow } from 'enzyme';
import MessageList from '../client/src/components/MessageList';
import MessageEntry from '../client/src/components/MessageEntry';

describe('MessageList', () => {
  it('should render', () => {
    const wrapper = shallow(<MessageList messages={[]} />);
    expect(wrapper.find('div').length).toBe(1);
  });
  it('should render three MessageEntries for three messages', () => {
    const wrapper = shallow(<MessageList
      messages={[
          { text: '', createdAt: '', id: 1 },
          { text: '', createdAt: '', id: 2 },
          { text: '', createdAt: '', id: 3 },
        ]}
    />);
    expect(wrapper.find(MessageEntry).length).toBe(3);
  });
});
