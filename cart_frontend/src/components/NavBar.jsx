import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = ({ user, count }) => {
    return (
        <nav>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">
                                    <span className="badge-success">{count}</span>
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </nav>
    )
}

export default NavBar;
