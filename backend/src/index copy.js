const express = require('express');
// const request = require('request');
const app = express();

app.listen(3333);

app.get('/api/call', (request,response) => {
    return response.send({'message': 'Hello World'});
});

app.post('/api/call', (req, res) =>{

    let options = { 
        method: 'POST',
        url: 'https://api.openai.com/v1/completions',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer k-ewtNdBEyIiBJcgwDb9PiT3BlbkFJ6VX7eEf6KHWxYAm4kZRN'
        },
        body: {
            prompt: req.body.prompt,
            model: "text-davinci-003",
            max_tokens: 7,
            temperature: 0,
            top_p: 1,
            n: 1,
            stream: false,
            logprobs: null,
            stop: "\n"
        },
        json: true
    };

    request(options, (error, response, body) => {
        if (error) {
            console.log(error);
            res.status(500).send(error);
        } else {
            res.json(body);
        }
    });

} );

//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



//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