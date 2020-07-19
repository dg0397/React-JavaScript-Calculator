import React from 'react';

const Button = ({data,handleClick}) => {
    const {button,id} = data
    return(
        <button id = {id} onClick = {handleClick}>{button}</button>
    )
}
export default Button;
