import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import MessageForm from '../components/MessageForm';
import Title from '../components/Title';

function Chat() {
  return (
    <Container>
      <Title title='Chat'/>
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <MessageForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
