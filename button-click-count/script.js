const button = document.querySelector(".button-click");
const display = document.querySelector(".display");

let count = 1;

button.onclick = () => {
    button.textContent = "Click Again!"
    display.textContent = `${count} so far`;
    count++;
}


