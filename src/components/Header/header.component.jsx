import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import "../../assets/styles/header.scss";
import { auth } from "../../firebase/firebase.utils";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="brand">
          <div className="brand-logo"></div>
        </Link>

        <div className="nav-items">
          <h4 className="nav-item">
            <Link to="/shop">Shop</Link>
          </h4>

          <h4 className="nav-item">
            <Link to="/shop/mens">Men</Link>
          </h4>

          <h4 className="nav-item">
            <Link to="/shop/womens"> Women </Link>
          </h4>

          <h4 className="nav-item">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i> Cart
            </Link>
          </h4>

          {this.props.currentUser ? (
            <h4 className="nav-item">
              <div className='option' onClick={() => auth.signOut()}> Sign Out </div>
            </h4>
          ) : (
            <h4 className="nav-item">
              <Link to="/login"> Sign In </Link>
            </h4>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);