import React from "react";

const Display = ({value}) => {
    return(
        <div className = "display_container">
            <input type="text" id="output" disabled value = {value}/>
            <input type="text" id="display" disabled value = {value}/>
        </div>
    )
}

export default Display;