import React from "react";
import { Row, Col, Button, Container, Form} from "react-bootstrap";
import appStyles from "../../styles/SignUpForm.module.css";

const EditProfile = () => {

  return (
    <Row className={appStyles.Row}>
  <Col md={4} className={`my-auto d-none d-md-block p-2 ${appStyles.SignUpCol}`}>
  </Col>
  <Col className="my-auto py-2 p-md-2" md={4}>
    <Container className={`${appStyles.Content} p-4 `}>
      <h1 className={appStyles.Header}>Edit Profile</h1>

      <Form className="editForm">
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Edit Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="New Email"
            className={appStyles.Input}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Edit Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="New Password"
            className={appStyles.Input}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Edit Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm New Password"
            className={appStyles.Input}
          />
        </Form.Group>

        <Button type="submit" className={appStyles.Button}>
          Submit
        </Button>

        <Button variant="danger" className={appStyles.Button}>
          Delete Account
        </Button>
      </Form>
    </Container>
  </Col>
  <Col md={4} className={`my-auto d-none d-md-block p-2 ${appStyles.SignUpCol}`}>
  </Col>
</Row>
  );
};

export default EditProfile;