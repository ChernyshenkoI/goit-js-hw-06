
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color
//  і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const buttonEl = document.querySelector(".change-color")
const colorEl = document.querySelector(".color")
const backgroundColor = getRandomHexColor();


document.body.style.backgroundColor = backgroundColor;

colorEl.textContent = backgroundColor

buttonEl.addEventListener("click",buttonClick)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function buttonClick () {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  colorEl.textContent = backgroundColor
}





