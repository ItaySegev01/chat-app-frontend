import { useContext, useState } from 'react';
import { Col, Container, Form, Row, Button, Spinner } from 'react-bootstrap';
import { useLoginUserMutation } from '../services/appApi';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/appContext';
import '../styles/Login.css';
import Title from '../components/Title';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { socket } = useContext(AppContext);
  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  function handleLogin(e) {
    e.preventDefault();
    // login logic
    loginUser({ email, password }).then(({ data }) => {
      if (data) {
        // socket work
        socket.emit('new-user');
        // navigate to the chat
        navigate('/chat');
      }
    });
  }

  return (
    <Container>
      <Title title='Login'/> 
      <Row>
        <Col md={5} className="login__bg"></Col>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={{ width: '80%', maxWidth: 500 }} onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h1 className="d-flex mb-4 text-center">Login</h1>
              <p className="h5 mb-4 d-flex">
                this is a demo app , you may use: <br /> email:
                admin@example.com <br /> password: 102030
              </p>
              {error && <p className="alert alert-danger">{error.data}</p>}
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {isLoading ? <Spinner animation="grow" /> : 'Login'}
            </Button>
            <div className="py-4">
              <p className="text-center">
                Don't have an account ? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
