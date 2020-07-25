import React from "react";
import Calculator from './Calculator';
import Footer from './Footer';

const Main = ({data,value,outputValue,handleInputNumber,handleInputOperator}) => {
    return(
        <div className = "container">
            <Calculator 
                data = {data} 
                value = {value} 
                outputValue = {outputValue} 
                handleInputNumber = {handleInputNumber} 
                handleInputOperator = {handleInputOperator} />
            <Footer />
        </div>
    )
}

export default Main;