interface StringByString {
    [key: string]: string;
  }

const modelset:StringByString={
    "DialoGPT-large" : "https://api-inference.huggingface.co/models/microsoft/DialoGPT-large",
    "DialoGPT-medium" :"https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium"
}

export default modelset