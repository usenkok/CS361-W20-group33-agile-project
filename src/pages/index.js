import React from "react"
import {Link} from 'gatsby'
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
        <Navbar.Text>
        <Link to="/profile/">View Our Alpacas</Link>
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        Signed in as: <a href="#aboutText">Guest</a>
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

function AboutText
() {
    return (
        <div className="aboutText">
          <p>Daniel’s Alpaca Farm raises alpacas and sells artisan alpaca products in their farm store (sweaters, yarn, lotions). 
            The farm has noticed that sponsoring or “adopting” animals is a popular way for farms to increase revenue, 
            and for urban dwellers to connect with animals that they don’t have the time or space to care for themselves.
            </p>
        </div>
    )
}


export default () => {
    return (
    <div>
        <AlpacaBar />
        <Title>Sponsor an Alpaca</Title>
        <img src={alpaca} style={{width: "20%", height: "10%" }} />
        <AboutText />
    </div>
    )
}
