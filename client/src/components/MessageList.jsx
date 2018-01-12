import React from 'react';
import { Container, ListGroup } from 'reactstrap';
import MessageEntry from './MessageEntry.jsx';

export default ({ messages, currentWorkSpaceId }) => (
  <div className="message-list-container">
    <Container>
      {messages.map((message) => {
        if (message.workspaceId === currentWorkSpaceId) {
          return <MessageEntry message={message.message} key={message.message.id} />;
        }
        return undefined;
      })};
    </Container>
  </div>
);
