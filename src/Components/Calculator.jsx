import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = ({data,value,outputValue,handleInput}) => {
    return(
        <div className = "calculator_container">
            <Display value = {value} outputValue = {outputValue} />
            <Buttons 
                buttonsData = {data} 
                handleClick = {handleInput} />
        </div>
    )
}

export default Calculator;

