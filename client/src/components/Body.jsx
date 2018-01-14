import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import MessageList from './MessageList.jsx';
import WorkSpaceList from './WorkSpaceList.jsx';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      workSpaces,
      messages,
      loadWorkSpaces,
      changeCurrentWorkSpace,
      currentWorkSpaceId,
    } = this.props;
    return (
      <Container fluid>
        <Row>
          <Col className="side-bar-col" xs="2">
            <WorkSpaceList
              workSpaces={workSpaces}
              loadWorkSpaces={loadWorkSpaces}
              changeCurrentWorkSpace={changeCurrentWorkSpace}
            />
          </Col>
          <Col className="message-list-col" xs="10">
            <MessageList messages={messages} currentWorkSpaceId={currentWorkSpaceId} />
          </Col>
        </Row>
      </Container>
    );
  }
}
