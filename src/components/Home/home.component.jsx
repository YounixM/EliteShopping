import React from 'react';
import '../../assets/styles/home.scss';
import Categories from '../Categories/categories.component';    
import Header from '../Header/header.component';

export default function Home() {
    return (
        <div className='homepage'>
            <Categories />
        </div>
    )
}
