import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = ({data,value,outputValue,handleInputNumber,handleInputOperator}) => {
    return(
        <div className = "calculator_container">
            <Display value = {value} outputValue = {outputValue} />
            <Buttons 
                buttonsData = {data} 
                handleClickNumber = {handleInputNumber} 
                handleClickOperator = {handleInputOperator} />
        </div>
    )
}

export default Calculator;

