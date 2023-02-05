const {Configuration, OpenAIApi} = require("openai");

const config = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(config);

var prompte = 'Você se identifica com qual gênero?';

const runPrompt = async (prompt) =>{
    

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        // model: 'text-curie-001',
        prompt: prompt,
        max_tokens: 1000,
        temperature: 0.5,
    });

    // console.log(response.data);
    // console.log(response.data.choices[0].text);
    // return response.data.choices[0].text;

    const resposta = response.data.choices[0].text;


    console.log(resposta);
    // console.log('ola');
};

runPrompt(prompte)
