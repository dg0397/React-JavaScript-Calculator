import React from "react";
import Calculator from './Calculator';
import Footer from './Footer';

const Main = ({data}) => {
    return(
        <div className = "container">
            <Calculator data = {data} />
            <Footer />
        </div>
    )
}

export default Main;