import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import "./styles.css"
import alpaca from './alpaca-cute.jpeg'
import bertiewooster from './bertie-wooster.png'
import { Navbar, Form, Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import AlpacaForm from './components/addbutton'

// local components
import Team33PayPalButton from "./components/paypalbutton"

function AlpacaBar() {
  return (
    <div className="alpacaBar">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Alpacify</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Text>
          <Link to="/profile/">View Our Alpacas</Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link to="/addpage/" >Add New Alpaca</Link>
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
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

export default () => {
  return (
    <div>
      <AlpacaBar />
      <div class="container">
        <div class="row">
          <div class="col-6">
            <Title>Add A New Alpaca</Title>
          </div>
        </div>

        <div>
          <AlpacaForm />
        </div>
      </div>
    </div>
  )
}