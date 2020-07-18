import React from 'react';
import Button from './Button';

const Buttons = ({buttonsData}) => {
    const newButtons = buttonsData.map(  (buttonData,key) => {
        return(
            <Button key = {key} data = {buttonData} />
        )
    })
    return(
        <div className = "buttons_container">
            {newButtons}
        </div>
    )
}
export default Buttons;