import React from 'react';

const Button = ({data,handleClick}) => {
    const {button,id,type} = data
    const styleGridArea = {
        gridArea : id
    }
    const handleClickInput = e =>{
        let {innerText} = e.target
        handleClick(innerText)
    }
    return(
        <button id = {id} style = {styleGridArea} onClick = {handleClickInput} data-type = {type}>{button}</button>
    )
}
export default Button;
