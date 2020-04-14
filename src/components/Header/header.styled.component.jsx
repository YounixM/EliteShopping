import styled from 'styled-components';
import { Link } from 'react-router-dom';

import eliteShoppingLogo from '../../assets/images/elite-clothing.png';

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 0px 20px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 10px 0;
`

export const BrandLinkContainer = styled(Link)`
    text-decoration: none;
    display: inline-block;
    width: 40%;
`

export const BrandLogoContainer = styled.div`
    height: 75px;
    width: 200px;
    background-position: center;
    background-size: cover;
    background-image: url(${eliteShoppingLogo});
`


export const NavContainer = styled.div`
    display: flex;
    float: right;
    justify-content: flex-end;
    width: 60%;
`

export const NavItemsContainer = styled.h4`
    display: flex;
    align-items: center;

    min-width: 100px;
    text-align: center;
    text-transform: uppercase;


    &:hover {
        cursor: pointer;
    }

    a {
        border-bottom: 2px solid transparent;

        -webkit-transition: border-bottom 0.3s ease-out;
        -moz-transition: border-bottom 0.3s ease-out;
        -o-transition: border-bottom 0.3s ease-out;
        transition: border-bottom 0.3s ease-out;

        &:hover {
            border-bottom: 2px solid;
        }
    }
`