import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">weatherstation</NavbarBrand>
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>

                        </Nav>
                        </Collapse>
                    </Navbar>
            </div>
        );
    }
}

export default Header;