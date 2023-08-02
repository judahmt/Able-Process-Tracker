// placeholder for when we connect the linear API and can get messages from there
var message = "Jeremiah sign NDA"

//feeds openAI API a prompt to extract requested signatory and requested document type from a message
    async function openAI(){
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer <>" //Don't have an able API key
        },
        body: JSON.stringify({
            "model": "text-davinci-003",
            "prompt": "This is a request for an entity to sign a document. Return the document type and name of the requested signature. " + message,
            "max_tokens": 7,
            "temperature": 0
        })
    })
    const result = await response.json();

    return result
}
