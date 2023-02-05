import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [result, setResult] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log('Entrou no useEffect')

  //     const response = await axios.post("http://localhost:3333/api/call");
  //     setResult(response.data);
  //     console.log(response.data)
  //   };
  //   fetchData();
  // }, []);

  const handleClick = async () =>{
    console.log('Entrou no useEffect')

    const response = await axios.post("http://localhost:3333/api/call");
    setResult(response.data);
    console.log(response.data)
 
  };

  return (
    <div>
      <h1>Resultado:</h1>
      <p>{result}</p>
      <button onClick={handleClick}>Clique Me</button>
    </div>
  );
}

export default App;