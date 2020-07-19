import React from "react";
import Calculator from './Calculator';
import Footer from './Footer';

const Main = ({data,value,handleInput}) => {
    return(
        <div className = "container">
            <Calculator data = {data} value = {value} handleInput = {handleInput} />
            <Footer />
        </div>
    )
}

export default Main;