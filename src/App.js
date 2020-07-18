import React from 'react';
import Main from "./Components/Main";
import data from "./data";

function App() {
  console.log(data)
  return (
    <Main data = {data} /> 
  );
}

export default App;
