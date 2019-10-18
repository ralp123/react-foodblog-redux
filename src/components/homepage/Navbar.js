import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';

class Navbar extends Component {


    render() {
        const { auth } = this.props.auth;

        const userLinks = (
            <li className="nav-item">
                <Link className="nav-link" to="#">Log out</Link>
            </li> 
        );

        const guestLinks = (
            <li className="nav-item">
                <Link className="nav-link" to="#">Login</Link>
            </li> 
        );

        return(
            <>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                        <Link className="navbar-brand" to="/">Food Blog</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>   
                                { auth ? userLinks : guestLinks }
                            </ul>
                        </div>  
                    </nav>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: false
    }
}

export default connect(mapStateToProps)(Navbar);
