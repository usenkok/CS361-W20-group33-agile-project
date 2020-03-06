import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import "./styles.css"
import bertiewooster from './bertie-wooster.png'
import {Navbar} from 'react-bootstrap'

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

function ProfileTitle(props) {
  return (
      <div className="profileTitle">
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
        <div className="col-lg-6">     
          <img className="img-fluid" alt="Closeup of brown alpaca face" src={bertiewooster}  /> 
        </div>  
        
        <div className="col-lg-6">
          <ProfileTitle>Bertie Wooster</ProfileTitle>
          <ProfileText />
          <h3>Sponsor</h3>
          <Team33PayPalButton />
        </div>
      </div>
    </div> 

    <div>
      <div className="container">
        <div className="row">
          <footer class="footer blue">
            <p>Copyright Daniel's Alpaca Farm 2020 | <a href="https://www.paypal.com/us/webapps/mpp/ua/acceptableuse-full">PayPal Acceptable Use Policy</a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
  )
}