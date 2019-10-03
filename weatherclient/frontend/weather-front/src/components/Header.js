import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../stylesheets/Weather.css';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">OWeather</NavbarBrand>
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <Link className="link-item" to="/Historical">Historical</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/Japatius/IoT-Project-2019" target="_blank">
                                    GitHub
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </Navbar>
            </div>
        );
    }
}

export default Header;