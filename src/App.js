import React, {useState} from 'react';
import Main from "./Components/Main";
import data from "./data";

function App() {
  const [expresion,setExpresion] = useState(0);
  const [outputValue,setOutputValue] = useState('')
  const handleInput = e => {
    let value,result;
    if(expresion === 0){
      value = "" + e.target.innerText;
    }else{
      value = expresion +  e.target.innerText;
    }
    result = eval(value).toString();
    setExpresion(value)
    setOutputValue(result)
  }
  return (
    <Main data = {data} value = {expresion} handleInput = {handleInput} outputValue = {outputValue}/> 
  );
}

export default App;
