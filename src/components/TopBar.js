import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';

export default function TopBar({ loggedInUser }) {
    return (
        <Navbar className="my-2" color="secondary" dark>
            <NavbarBrand tag={Link} to='/home'>InstaBook</NavbarBrand>
            <p style={{color: 'white'}}>Logged in as: {loggedInUser}</p>
        </Navbar>
    );
}
