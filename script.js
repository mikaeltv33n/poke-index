addEventListener("submit", submithandler)
function submithandler(event) {
    event.preventDefault() 

    function getPokemon() {
        const pokemon = document.querySelector(".pokeList")
        pokemon.innerText = "Loading..."
        fetch("https://pokeapi.co/api/v2/pokemon/20", {
            headers: {
                "accept": "application/json"
            },
            method: "GET" // GET er optional
        })
            .then(function (response) {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(function (result) {
                console.log(result)
                pokemon.innerText = result.pokemon
                document.body.innerHTML += `<h1>${result.name}</h1>
            <p>species: ${result.name}</p>
            <img src="${result.sprites.other.dream_world.front_default}"alt`

            })
    }
    getPokemon()
    
     
    const SEARCHBUTTON = document.querySelector(".searchButton")

    SEARCHBUTTON.addEventListener("click", getPokemon)
}


