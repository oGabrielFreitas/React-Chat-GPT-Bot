import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log('Entrou no useEffect')

  //     const response = await axios.post("http://localhost:3333/api/call");
  //     setResult(response.data);
  //     console.log(response.data)
  //   };
  //   fetchData();
  // }, []);

  const handleSubmit = async () =>{
    console.log('Entrou no useEffect')

    const response = await axios.post("http://localhost:3333/api/call",{prompt: prompt});
    setResult(response.data);
    console.log(response.data)
 
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        <div>
            {result}
        </div>
    </div>
  );
}

export default App;