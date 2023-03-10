import openai from "./chatgpt";
import modelset from "./modelselection";
// const query = async(prompt: string, chatID: string, model: string) => {
//     //let res:string = "ChatGPT was unable to find an answer for that!"

//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer "+process.env.HUGGINGFACE_BEARER);
//     myHeaders.append("Content-Type", "application/json");
//     console.log(model)
//     console.log(modelset)
//     console.log(modelset[model])
//     var raw = JSON.stringify({
//     "inputs": {
//         "past_user_inputs": [],
//         "generated_responses": [],
//         "text": prompt
//     }
//     });

//     var requestOptions:RequestInit = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//     };

//     const res = await fetch(modelset[model], requestOptions)
//     .then(response => response.text())
//     .then(res => {return JSON.parse(res)["conversation"]["generated_responses"][0];})
//     .catch(error => console.log('error', error));
//         console.log(res)
//     return res;
// }
const query = async (prompt: string, chatID: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => {return res.data.choices[0].text;})
    .catch(
      (err) =>
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );
  return res;
};

export default query;
