import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from "../../firebase/firebase.utils";

import CartIcon from '../CartIcon/CartIcon.component';
import Cart from '../Cart/cart.component';

import { selectCartVisibility } from '../../redux/cart/cart.selectors';
import { selectUserDetails } from '../../redux/user/user.selectors';

// Styled Component Imports
import { HeaderContainer, BrandLinkContainer, BrandLogoContainer, NavContainer, NavItemsContainer } from "./header.styled.component";

function Header ({ currentUser , showCart }) {
    return (
      <HeaderContainer>
        <BrandLinkContainer to="/">
          <BrandLogoContainer> </BrandLogoContainer>
        </BrandLinkContainer>

        <NavContainer>
          <NavItemsContainer>
            <Link to="/shop">Shop</Link>
          </NavItemsContainer>

          <NavItemsContainer>
            <Link to="/shop/mens">Men</Link>
          </NavItemsContainer>

          <NavItemsContainer>
            <Link to="/shop/womens"> Women </Link>
          </NavItemsContainer>

          <NavItemsContainer>
              <CartIcon /> 
          </NavItemsContainer>

          {currentUser ? (
              <NavItemsContainer>
              <div className='option' onClick={() => auth.signOut()}> Sign Out </div>
            </NavItemsContainer>
          ) : (
            <NavItemsContainer>
              <Link to="/login"> Sign In </Link>
            </NavItemsContainer>
          )}
        </NavContainer>
         
        {showCart &&
          <Cart />
        }
        
      </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserDetails,
  showCart: selectCartVisibility
});

export default connect(mapStateToProps)(Header);