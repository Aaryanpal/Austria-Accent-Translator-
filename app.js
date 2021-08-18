const translateBtn = document.querySelector('#submit-btn');
const clearBtn = document.querySelector('#clear-btn');
const outputArea = document.querySelector('#div-opt');
const textInput = document.querySelector('#input-text');

url = 'https://api.funtranslations.com/translate/russian-accent.json';

const getTranslationURL = (text) => {
    return url + '?' + 'text=' + text
}
const errorHandler = (error)=>{
    alert('Cannot Leave Blank')

}
translateBtn.addEventListener('click', () =>{
    const inputText=textInput.value
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(data=>{
        const translatedText=data.contents.translated;
        outputArea.innerText = translatedText;
    })
    .catch(errorHandler);
})
clearBtn.addEventListener('click',() => {
    textInput.value='';
    outputArea.innerText='';
})