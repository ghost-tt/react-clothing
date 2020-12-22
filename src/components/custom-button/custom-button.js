import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...OtherProps}) => (
    <button className={`${inverted ? 'inverted' : '' } custom-button`} {...OtherProps}>
        {children}
    </button>
)

export default CustomButton;