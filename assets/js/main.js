
let count = 0;

let changeCount = (number) => {
    count += number;
    document.querySelector("#count").textContent = count;
}

document.querySelector("#increase").addEventListener("click", () => {
    changeCount(1);
})

document.querySelector("#decrease").addEventListener("click", () => {
    changeCount(-1);
})

document.querySelector("#increaseBy5").addEventListener("click", () => {
    changeCount(5);
})


