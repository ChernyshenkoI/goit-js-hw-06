// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const refs = {
    input: document.getElementById("name-input"),
    output: document.getElementById("name-output"),
}

refs.input.addEventListener('input', onInputChange)


function onInputChange (event){
    refs.output.textContent =  event.currentTarget.value
    console.log('event.currentTarget.value :>> ', event.currentTarget.value);
}


console.log('refs.input :>> ', refs.input);
console.log('refs.output :>> ', refs.output);