import React from "react";

import './Button.css';
const Button =(props) => {
    return (
        <button className={`button ${props.className}`}>
            {props.btnText}
        </button>
    )
}

export default Button;