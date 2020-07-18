import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = ({data}) => {
    return(
        <div className = "calculator_container">
            <Display />
            <Buttons buttonsData = {data} />
        </div>
    )
}

export default Calculator;

