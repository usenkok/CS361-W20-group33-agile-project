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
          <p>He has curly blond hair, called Le Roi-Soleil by friends and family, and is a mysterious and cute child. Of course trapped in farm conditions, he failed to own a rose he loved. He doesn't repel the grass tips and winter hay, but carrots are obviously more popular with him. As a docile alpaca, he rarely spit at people, but if you violently pull his blond hair, the consequences are quite bad.
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