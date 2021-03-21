import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="row bg-light text-info align-items-center">
            <div className="col-6 d-flex justify-content-center align-items-center ">
                <h1>Super Riders</h1>
            </div>
            <div className="col-6 justify-content-end ">
                <Navbar className="justify-content-end  " expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto " activeKey="/home">
                            <Link className="p-2" to="/home">Home</Link>
                            <Link className="p-2" to="/destination/BIKE">Destination</Link>
                            <Nav.Link eventKey="disabled" disabled>Blog</Nav.Link>
                            <Link className="p-2" to="/contact">Contact</Link>
                            <Link className="p-2" to="/login"><button className="btn btn-warning">Login</button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </div>
    );
};

export default Header;