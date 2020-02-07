import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar,Image } from 'react-bootstrap'
import alpaca from './alpaca-cute.jpeg'
import "./styles.css"


function AlpacaBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Alpaca Sponsoring</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        Signed in as: <a href="#login">Alpaca Sponsor</a>
        </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
    )
}

function Header(props) {
    return (
        <h1>{props.title}</h1>
    )
}


export default () => {
    return (
    <div>
        <AlpacaBar />
        <Header title="Alpaca"/>
        <img src={alpaca} style={{height: "10%" }} />
    </div>
    )
}
