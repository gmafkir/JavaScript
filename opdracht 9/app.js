let count = 0;

let counter = document.getElementById('counter');
let button = document.getElementById('clicker');

button.addEventListener('click', () => {
    count++;
    if (count > 10) {
        count = 0;
    }
    counter.textContent = count;
});