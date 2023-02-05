import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleClick = async () =>{
    console.log('Entrou no useEffect')
    console.log('Prompt = ', prompt)

    const response = await axios.post("http://localhost:3333/api/call", {prompt: prompt});
    setResult(response.data);
    console.log(response.data)
 
  };

  return (
    <div>
        <input type="text" name="" id="" onChange={(e) => setPrompt(e.target.value)}/>
        <button onClick={handleClick}>Clique Me</button>
        <div>
            Resultado: {result}
        </div>
    </div>
  );
}

export default App;