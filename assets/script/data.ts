// *****************************
// *** Set Variables in Data ***
// *****************************
//Params
const params = new URLSearchParams(window.location.search);
const imgSrc = params.get("ImgSrc");
const title = params.get("title");
const date = new Date(params.get("published")).toLocaleDateString();
const creator = params.get("creator");
const description = params.get("description");
const charactersUrl = params.get("characters");
const typeData = params.get("type")
//Nodes
const imgData = document.getElementById("img-data");
const titleData = document.getElementById("title");
const dateData = document.getElementById("date-data");
const creatorData = document.getElementById("creator-data");
const descriptionData = document.getElementById("description");
const subTitleBelow = document.getElementById("subtitle-below");
const resultsBelow = document.getElementById("results-below");
const cardsBelow = document.getElementById("cards-below");
let contentCardsBelow ="";
//Inner HTML and set attribute
imgData.setAttribute('src', `${imgSrc}`);
titleData.innerHTML= `${title}`;
dateData.innerHTML = `${date}`;
creatorData.innerHTML = `${creator}`;
descriptionData.innerHTML = `${description}`;
if (typeData === "comics"){
    subTitleBelow.innerHTML = "Personajes"
} else if (typeData === "characters"){
    subTitleBelow.innerHTML = "Comics"
}
// Fetch
const urlData = `${charactersUrl}?ts=1&apikey=${apiKey}&hash=${hash}`
fetch(urlData)
            .then(res => res.json())
            .then((characters) => {
                console.log(characters.data)
                const charactersArray = characters.data.results
                console.log(charactersArray.length)
                if (charactersArray.length === 0){
                    resultsBelow.innerText ="0 resultados";
                    cardsBelow.innerHTML = "<h2> No se han encontrado resultados </h2>"
                } else {
                }
        })

