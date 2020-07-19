import React from 'react';
import Button from './Button';

const Buttons = ({buttonsData,handleClick}) => {
    const newButtons = buttonsData.map(  (buttonData,key) => {
        return(
            <Button key = {key} data = {buttonData} handleClick={handleClick}/>
        )
    })
    return(
        <div className = "buttons_container">
            {newButtons}
        </div>
    )
}
export default Buttons;