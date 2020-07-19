import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = ({data,value,handleInput}) => {
    return(
        <div className = "calculator_container">
            <Display value = {value} />
            <Buttons buttonsData = {data} handleClick = {handleInput} />
        </div>
    )
}

export default Calculator;

