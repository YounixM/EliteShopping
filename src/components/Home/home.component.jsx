import React from 'react';
import '../../assets/styles/home.scss';
import { HomeContainer } from './home.styled.component';
import Categories from '../Categories/categories.component';

export default function Home() {
    return (
        <HomeContainer>
            <Categories />
        </HomeContainer>
    )
}
