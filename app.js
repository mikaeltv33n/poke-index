const URL = new URLSearchParams(window.location.search)
const OFFSET = parseInt(URL.get("offset") || "0")
const NEXT_PAGE = document.querySelector(".nextPage")
const PREV_PAGE = document.querySelector(".prevPage")





// `/?offset=${Math.max(OFFSET - 20, 0)}`


fetch(`https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}`)
    .then(function (response) {
        if (response.status === 200) {
            return response.json()
        } else {
            document.body.innerText += "ups, du er en kæmpe idiot"
        }

    })

    .then(function (data) {

        const LAST_OFFSET = data.count - (data.count % 20)

        NEXT_PAGE.href = `/?offset=${Math.min(LAST_OFFSET, OFFSET + 20)}` // hvis offset er højere eller lig med 1281 så skal den være true. eller hvis offset er mindre så skal den være false
        PREV_PAGE.href = `/?offset=${OFFSET <= 0 ? 0 : OFFSET - 20}` // hvis offset er mindre end eller lig med 0 så skal den være true. eller hvis offset er 20 eller højere så skal den være false

        count = data.count
        const UL = document.querySelector(".pokeList")
        data.results.forEach(function (result) {
            const LI = document.createElement("li")
            LI.innerHTML = `<a href="/pokemon.html?name=${result.name}">${result.name}</a>`
            UL.append(LI)
        })
    })