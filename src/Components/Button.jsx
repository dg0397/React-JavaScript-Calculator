import React from 'react';

const Button = ({data}) => {
    const {button,id} = data
    return(
        <button id = {id} >{button}</button>
    )
}
export default Button;
