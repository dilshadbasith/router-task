import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Login() {
  return (
    <div className="parent">
      <h1 className="heading">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted">
          Don't Have an Account?<Link to="/">Register</Link>
        </Form.Text>
        <br />
        <Link to="/home">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
