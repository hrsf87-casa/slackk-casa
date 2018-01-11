import React from 'react';
import { mount } from 'enzyme';
import App from '../client/src/components/App';
import MessageList from '../client/src/components/MessageList';
import MessageEntry from '../client/src/components/MessageEntry';
import './helpers/WebSocket';

describe('App', () => {
  describe('Rendering', () => {
    it('should render', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('div').length).toBe(2);
    });
    it('should render a MessageList component', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MessageList).length).toBe(1);
    });
  });
});
