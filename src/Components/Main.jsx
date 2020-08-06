import React from "react";
import Calculator from './Calculator';
import Footer from './Footer';

const Main = ({data,value,outputValue,handleInput,handleKey,}) => {
    return(
        <div id = "container" onKeyDown= {handleKey} tabIndex = "1">
            <Calculator 
                data = {data} 
                value = {value} 
                outputValue = {outputValue} 
                handleInput= {handleInput}/>
            <Footer />
        </div>
    )
}

export default Main;