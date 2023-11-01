import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Img from './Navbar/Imgs/Left_Img.jpg';
import Row from 'react-bootstrap/Row';

function SignUp() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container  className="top_1 pt-5 d-flex justify-content-center">
      <Row className="mb-3">
        <Col md={4} className="d-flex align-items-center">
          <img
            src={Img}
            alt="pic"
            className="img-fluid img_2"
          />
        </Col>
        <Col md={4}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h2 className="mb-3 text-center bg-white text-black">SIGN-UP</h2>
            <Row className="mb-3 text-center text-md-start">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First Name"
                  className=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02" className="text-center text-md-start">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last Name"
                  className=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3 text-center text-md-start">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  required
                  type="date"
                  className=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04" className="text-center text-md-start">
                <Form.Label>Gender</Form.Label>
                <Form.Select required>
                  <option value="">Select...</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3 text-center text-md-start">
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email Address"
                  pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom06" className="text-center text-md-start">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3 text-center text-md-start">
              <Form.Group as={Col} md="6" controlId="validationCustom07" className="">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="Phone Number"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3 text-center text-md-start">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" className='border-0 Sign_in w-100 fw-semibold py-3'>Submit</Button>
          </Form>
        </Col>
        <Col md={4}  className="d-none d-md-flex align-items-center">
          <img
            src={Img}
            alt="pic"
            className="img-fluid img_3"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
