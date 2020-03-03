import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import "./styles.css"
import alpaca from './alpaca-cute.jpeg'
import bertiewooster from './bertie-wooster.png'
import {Navbar, Form, Button} from 'react-bootstrap'

// local components
import Team33PayPalButton from "./components/paypalbutton"

function AlpacaBar() {
  return (
      <div className="alpacaBar">
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Alpacify</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Text>
      <a href="#alpacaProfiles">Alpaca Profile</a>
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

function ProfileText
() {
    return (
        <div className="ProfileText">
          <h2>About</h2>
          <p>Some text about this alpaca. Lorem ipsum dolor amet whatever hella listicle, marfa pinterest literally subway tile williamsburg hot chicken. Id selvage pinterest neutra. Gluten-free occupy live-edge, ex trust fund keffiyeh enamel pin iPhone adaptogen taiyaki. +1 mustache four dollar toast brooklyn, master cleanse dolore vexillologist prism meh venmo chillwave jean shorts bespoke live-edge. Literally forage poke quinoa, echo park lyft in williamsburg cillum cronut cornhole shoreditch vexillologist slow-carb.
          </p>
        </div>
    )
}

export default () => {
  return (
  <div>
      <AlpacaBar />
      <div className="container">
        <div className="row">
          <div className="col-6">     
            <img className="img-fluid" alt="Responsive image" src={bertiewooster}  /> 
          </div>  
          <div className="col-6">
            <ProfileText />
            <h3>Sponsor</h3>
            <Team33PayPalButton />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Title>Profile: Bertie Wooster</Title>
          </div>
        </div> 
      </div> 
  </div>
  )
}