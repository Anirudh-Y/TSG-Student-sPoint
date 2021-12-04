import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


function NavBar() {

    return (
        <Nav activeKey="1" className='navbar_divs'>

            <Nav.Item>
                <Nav.Link eventKey="1" href="#/home">
                    <p>
                    <AccountBalanceIcon style={{ fontSize: "40px" }} />
                    </p>
                </Nav.Link>
            </Nav.Item>


            <Nav.Item>
                <Nav.Link eventKey="2" href="#/home"  >
                    <p>HOME</p>

                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="4" href="#/home" >
                    <p>STUDENT'S PROFILE</p>

                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="5" href="#/home" >
                    <p> EVENTS (TSG)</p>

                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="6" href="#/home" >
                    <p>SOCIETY POINT</p>

                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="7" href="#/home" >
                    <p>NEWS BULLETIN</p>

                </Nav.Link>
            </Nav.Item>
            <NavDropdown style={{color:"white"}} title="STUDENT'S POINT" id="nav-dropdown">
                <NavDropdown.Item eventKey="8.1" href='/'>
                    <p style={{color:"black"}}>Academic Point</p>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="8.2" href='/career' >
                    <p style={{color:"black"}}>Career Point</p>
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
                <Nav.Link eventKey="9" href="#/home" >
                    <p>QUICK INFO</p>

                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="10" href="#/home" >
                    <p>ARCHIVES</p>

                </Nav.Link>
            </Nav.Item>

        </Nav>
    )
}

export default NavBar;
