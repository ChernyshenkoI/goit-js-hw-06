// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//  і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const increaseEL = document.querySelector("#font-size-control")
const textEl= document.querySelector("#text")

increaseEL.addEventListener("input", onChange)

function onChange (){
    const result = increaseEL.value;
    textEl.style.fontSize = result + "px"
}

console.log('increaseEL :>> ', increaseEL);
console.log('textEl :>> ', textEl);





