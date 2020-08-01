import React, {useState} from 'react';
import Main from "./Components/Main";
import data from "./data";

function App() {
  const [expresion,setExpresion] = useState(0);
  const [outputValue,setOutputValue] = useState('');
  const [operator,setOperator] = useState('');
  const [usingOperator,setUsingOperator] = useState(false)

  const handleInputNumber = e => {

    const value = e.target.innerText ;
    const regux = /[/+-/x/.//]$/;
    const operators = /[+-/x]/;
    let result;

    if( expresion === 0 || usingOperator){
      result = "" +  value;
      console.log("hey")
    }else if(!usingOperator){
      result = expresion + value;
      console.log(result);
      console.log("heyyo")
    }


    if(regux.test(value)){
      console.log("yes");
      console.log(value);
      setUsingOperator(true);
    }else{
      setUsingOperator(false);
      console.log("no");
    }
    
    //console.log(result);
    if(!usingOperator){
      setOutputValue( result)
    }else{
      setOutputValue(outputValue + result);

    }
    setExpresion(result.toString());


    if(operators.test(value)){
      if(regux.test(outputValue)){
        console.log("need replace")
        setOutputValue(outputValue.replace(regux,value))
      }
      console.log("It is an operator")
      setExpresion(value)
    }
  }

  //const handleInputOperator = e =>{
  //
  //  const value = e.target.innerText ;
  //  const regux = /[/+-/x/.//]$/;
//
//
  //  if(outputValue === ""){
  //    console.log("yesi")
  //    setOutputValue( expresion + value);
  //  }else{
  //    console.log("yes");
  //    setOutputValue( outputValue + expresion);
  //  }
//
  //  if(regux.test(outputValue)){
  //    console.log("jaja")
  //    setOutputValue(outputValue.replace(regux,value))
  //  }
  //  setUsingOperator(true);
  //  
  //  
  //  
  //  //console.log(outputValue);
  //  //console.log(regux.test(outputValue))
  //  //console.log(outputValue.replace(regux,value))
  //}
  return (
    <Main 
      data = {data} 
      value = {expresion} 
      handleInputNumber = {handleInputNumber}
      handleInputOperator = '' 
      outputValue = {outputValue}/> 
  );
}

export default App;
