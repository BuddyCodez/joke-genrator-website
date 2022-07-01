let jokeBtn = document.getElementById("jkBtn");
let jokeContainer = document.getElementById("joke");
let spinner = document.getElementById("spin");
const Genrate = async() => {
    const config = {
        headers: {
            Accept: "application/json"
        }
    };
    const response = await fetch("https://icanhazdadjoke.com/", config);
    const data = await response.json()

    jokeContainer.innerHTML = data.joke;
}
const changeSpin = (display,time) => {
    setTimeout(() => { spinner.style.display = display;
},time)
}
window.addEventListener("load", () => { changeSpin("none", 300);  Genrate()})
 // loading first joke
jokeBtn.addEventListener("click",() => {changeSpin("block", 0); changeSpin("none", 400); Genrate()}) // generating new joke on button click