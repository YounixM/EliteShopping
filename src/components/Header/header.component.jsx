import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import "../../assets/styles/header.scss";
import { auth } from "../../firebase/firebase.utils";

import CartIcon from '../CartIcon/CartIcon.component';
import Cart from '../Cart/cart.component';

import { selectCartVisibility } from '../../redux/cart/cart.selectors';
import { selectUserDetails } from '../../redux/user/user.selectors';

function Header ({ currentUser , showCart }) {
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
              <CartIcon /> 
          </h4>

          {currentUser ? (
            <h4 className="nav-item">
              <div className='option' onClick={() => auth.signOut()}> Sign Out </div>
            </h4>
          ) : (
            <h4 className="nav-item">
              <Link to="/login"> Sign In </Link>
            </h4>
          )}
        </div>
         
        {showCart &&
          <Cart />
        }
        
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserDetails,
  showCart: selectCartVisibility
});

export default connect(mapStateToProps)(Header);