const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const counterDisplay = document.getElementById('counter');

let counter = 0;

addBtn.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
});

subtractBtn.addEventListener('click', () => {
    counter--;
    counterDisplay.textContent = counter;
});
