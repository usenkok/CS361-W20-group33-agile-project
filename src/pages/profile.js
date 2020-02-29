import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import "../components/styles.css"
import bertiewooster from '../components/bertie-wooster.png'
import { Navbar } from 'react-bootstrap'

// local components
import Team33PayPalButton from "../components/paypalbutton"

function AlpacaBar() {
  return (
    <div className="alpacaBar">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Alpacify</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Text>
          <a href="#alpacaProfiles">View Our Alpacas</a>
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
      <p>Some text about this alpaca. Lorem ipsum dolor amet whatever hella listicle, marfa pinterest literally subway tile williamsburg hot chicken. Id selvage pinterest neutra. Gluten-free occupy live-edge, ex trust fund keffiyeh enamel pin iPhone adaptogen taiyaki. +1 mustache four dollar toast brooklyn, master cleanse dolore vexillologist prism meh venmo chillwave jean shorts bespoke live-edge. Literally forage poke quinoa, echo park lyft in williamsburg cillum cronut cornhole shoreditch vexillologist slow-carb.
          </p>
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
            <Title>Profile: Bertie Wooster</Title>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <img class="img-fluid" alt="Responsive image" src={bertiewooster} />
          </div>
          <div class="col-6">
            <ProfileText />
            <Team33PayPalButton />
          </div>
        </div>
      </div>
    </div>
  )
}