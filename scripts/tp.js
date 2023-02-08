console.log("dom")
//selectors
const jokeContainer = document.getElementById("joke")
const d = document.getElementById("d")
const button = document.getElementById("btn")
const burger = document.querySelector(".burger")
const main = document.querySelector(".main")

//Api url
const url = "https://v2.jokeapi.dev/joke/Any?type=twopart";

//events
burger.addEventListener("click", ()=>{
    main.classList.toggle("active")
})

//functions
const getJoke = () =>{
    jokeContainer.classList.remove("fade")
    d.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(joke =>{
        jokeContainer.classList.add("fade")
        d.classList.add("fade")
        jokeContainer.textContent = joke.setup;
        d.textContent = joke.delivery;
    })
    .catch(err => {
        console.log(err.message)
    })
}

getJoke()

 button.addEventListener("click", getJoke);