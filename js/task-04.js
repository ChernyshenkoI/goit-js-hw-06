

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = {
    value : 0,

    increment(){
        this.value+=1;
    },

    decrement(){
        this.value-=1;
    }
}


const decrementBtn = document.querySelector('button[data-action="decrement"]')

const incrementBtn = document.querySelector('button[data-action="increment"]')

const ValueEl = document.getElementById("value") 


decrementBtn.addEventListener('click', function (){
    counterValue.decrement()
    ValueEl.textContent=counterValue.value;
})


incrementBtn.addEventListener('click', function (){
    counterValue.increment()
    ValueEl.textContent=counterValue.value;
})

console.log('decrementBtn :>> ', decrementBtn);
console.log('incrementBtn :>> ', incrementBtn);
console.log('ValueEl :>> ', ValueEl);