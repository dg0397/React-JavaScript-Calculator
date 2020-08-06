import React, {useState} from 'react';
import Main from "./Components/Main";
import data from "./data";
import "./Styles/styles.scss";


function App() {
  const [expresion,setExpresion] = useState(0);
  const [outputValue,setOutputValue] = useState('');
  const [evaluatedExpresion,setEvaluatedExpresion] = useState('');
  const [usingOperator,setUsingOperator] = useState(false)

  const handleInput = innerText => {

    const value = innerText ;
    const regux = /[/+-/x/.//]$/;
    const operators = /[+-/x]/;
    let result;

    //assing a value to result varialbe
    if( expresion === 0 || usingOperator){
      result = "" +  value;
     // console.log("hey")
    }else if(!usingOperator){
      result = expresion + value;
      //console.log(result);
      //console.log("heyyo")
    }

    //checking if I using operators
    if(regux.test(value)){
      //console.log("yes");
      //console.log(value);
      setUsingOperator(true);
    }else{
      setUsingOperator(false);
      //console.log("no");
    }
    
    
    setOutputValue(outputValue + value);
    setExpresion(result.toString());

    //This method help to replace operator when it's repeat
    if(operators.test(value)){
      if(regux.test(outputValue)){
        //console.log("need replace")
        setOutputValue(outputValue.replace(regux,value))
      }
      //console.log("It is an operator")
      setExpresion(value)
    }

    //Method to eval an expression
    if(value === "="){
      result = eval(outputValue.replace("x","*"))
      let fullExpression = `${outputValue}= ${result}`
      setOutputValue(fullExpression);
      setExpresion(result)
      setEvaluatedExpresion(result)
    }
    //Method that define what occur when a expression is eval
    if(evaluatedExpresion || evaluatedExpresion === 0){
      if(operators.test(value)){
        setOutputValue(expresion + value)
      }else{
        setExpresion(value)
        setOutputValue(value)
      }
      setEvaluatedExpresion("")
    }

    //Method to clean all
    if(value === "AC"){
      setExpresion(0)
      setOutputValue("")
      setUsingOperator(false)
      setEvaluatedExpresion("")
    }

    //eraser method{
    if(value ==='⌫'){
      if(expresion === 0){
        setExpresion(0);
        setOutputValue(0);
        return
      };
      let newValue = expresion !== "⌫" && expresion.slice(0,expresion.length - 1);
      console.log(newValue)
      setExpresion(newValue)
      let newOutPut = outputValue !== "⌫" &&  outputValue.slice(0,outputValue.length - 1)
      setOutputValue(newOutPut)
    }
  }

  const handlekey = (e) =>{
    console.log(e)
    const key = document.querySelector(`button[data-key="${e.key}"]`);
    if(!key) return;
    const value = key.innerText;
    handleInput(value);
  }

  return (
    <Main 
      data = {data} 
      value = {expresion} 
      handleInput = {handleInput}
      outputValue = {outputValue}
      handlekey = {handlekey}
      /> 
  );
}

export default App;
