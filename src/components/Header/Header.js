import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div className="row"> 
            <div className="col-5 justify-content-end align-items-center p-5">
                <h1>Super Riders</h1>
            </div>
            <div className="col-7">
                <Nav className="justify-content-end align-items-center p-5" activeKey="/home">
                    <Link className="p-2" to="/home">Home</Link>
                    <Link className="p-2" to="/destination/BIKE">Destination</Link>
                    <Nav.Link eventKey="disabled" disabled>Blog</Nav.Link>
                    <Link className="p-2" to="/contact">Contact</Link>
                    <Link className="p-2" to="/login"><button className="btn btn-warning">Login</button></Link>
                </Nav>
            </div>
        </div>
    );
};

export default Header;