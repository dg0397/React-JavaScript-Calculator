import React from "react";

const Display = ({value,outputValue}) => {
    return(
        <div className = "display_container">
            <input type="text" id="display" disabled value = {outputValue}/>
            <input type="text" id="output" disabled value = {value}/>
        </div>
    )
}

export default Display;