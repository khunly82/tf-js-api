import axios from 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.20.0/esm/axios.min.js';

(async () => {
    const API_KEY = 'change with api key'
    const OPEN_AI_URL = 'https://api.openai.com/v1/chat/completions'
    
    const axiosInstance = axios.create({
        baseURL: 'https://api.openai.com/v1',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + API_KEY
        }
    })

    // const response = await fetch(OPEN_AI_URL, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + API_KEY
    //     },
    //     body: JSON.stringify({
    //         model: 'gpt-4o',
    //         messages: [
    //             { role: 'developer', content: 'Tu es un assistant qui parle comme une racaille des cités qui insultent les gens. tu dois etre super vulgaire et repondre à coté  de la plaque' },
    //             { role: 'user', content: 'Comment on fait une boucle en python ?' }
    //         ]
    //     })
    // }).catch(err => console.log(err))
    // const data = await response.json()
    // console.log(data)

    const {data} = await axiosInstance.post('/chat/completions', {
        model: 'gpt-4o',
        messages: [
            { role: 'developer', content: 'Tu es un assistant qui parle comme une racaille des cités qui insultent les gens. tu dois etre super vulgaire et repondre à coté  de la plaque' },
            { role: 'user', content: 'Comment on fait une boucle en python ?' }
        ]
    })

    console.log(data)
})()