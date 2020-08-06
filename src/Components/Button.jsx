import React from 'react';

const Button = ({data,handleClick}) => {
    const {button,id,type} = data
    const styleGridArea = {
        gridArea : id
    }
    return(
        <button id = {id} style = {styleGridArea} onClick = {handleClick} data-type = {type}>{button}</button>
    )
}
export default Button;
