import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Form, Button} from 'react-bootstrap'
import alpaca from './alpaca-cute.jpeg'
import "./styles.css"


function AlpacaBar() {
    return (
        <div className="alpacaBar">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Alpaca Sponsoring</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"> 
        <Navbar.Text>
        Signed in as: <a href="#login">Guest</a>
        </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

function Title(props) {
    return (
        <div className="alpacaTitle">
        <h1>{props.children}</h1>
        </div>
    )
}

function Login() {
    return (
        <div className="login">
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control size="sm" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control size="sm" type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Sign up!
  </Button>
</Form>
</div>
    )
}


export default () => {
    return (
    <div>
        <AlpacaBar />
        <Title>Sponsor an Alpaca</Title>
        <img src={alpaca} style={{height: "10%" }} />
        <Login />
    </div>
    )
}
