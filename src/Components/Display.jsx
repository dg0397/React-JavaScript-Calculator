import React from "react";

const Display = ({value,outputValue}) => {
    return(
        <div className = "display_container">
            <input type="text" id="output" disabled value = {value}/>
            <input type="text" id="display" disabled value = {outputValue}/>
        </div>
    )
}

export default Display;