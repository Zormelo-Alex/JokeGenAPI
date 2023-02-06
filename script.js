console.log("dom")
//selectors
const jokeContainer = document.getElementById("joke")
const dark = document.getElementById("darkjoke")
const button = document.getElementById("btn")
const burger = document.querySelector(".burger")
const main = document.querySelector(".main")

//Api url
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

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

//  const getMore = () =>{
//     fetch("https://v2.jokeapi.dev/joke/Any?amount=10")
//     .then(data => data.json())
//     .then(jokes => {
//         jokes.jokes.forEach((joke)=>{
//             //console.log(joke.category)
//             if(joke.category == "Dark"){
//                 console.log(joke)
//                 jokeContainer.textContent = joke
//             }  
//         })
//     })
//     .catch(err=>console.log(err.message))
//  }

//  getMore()