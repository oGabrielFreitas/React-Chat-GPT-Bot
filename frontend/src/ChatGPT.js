import React, { useState } from 'react';

const ChatGPT = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3333/api/call', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        })
        .then(response => response.json())  
        .then(data => {
            setResponse(data.choices[0].text);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <div>
                {response}
            </div>
        </div>
    );
}

export default ChatGPT;