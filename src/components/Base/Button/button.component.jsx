import React from 'react';
import '../../../assets/styles/button.scss';

export default function Button({children, customStyles, ...restProps}) {
    return (
        <button className={`custom-button ${customStyles}`} {...restProps} > 
            {children}
        </button>
    )
}
