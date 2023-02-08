console.log("dom")
//selectors
const jokeContainer = document.getElementById("joke")
const button = document.getElementById("btn")
const burger = document.querySelector(".burger")
const main = document.querySelector(".main")

//Api url
const url = "https://v2.jokeapi.dev/joke/Miscellaneous?type=single";

//events
burger.addEventListener("click", ()=>{
    main.classList.toggle("active")
})

//functions
const getJoke = () =>{
    jokeContainer.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(joke =>{
        jokeContainer.classList.add("fade")
        jokeContainer.textContent = joke.joke;
    })
    .catch(err => {
        console.log(err.message)
    })
}

getJoke()

 button.addEventListener("click", getJoke);