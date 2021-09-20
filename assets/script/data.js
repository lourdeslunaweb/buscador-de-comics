// *****************************
// *** Set Variables in Data ***
// *****************************
//Params
var params = new URLSearchParams(window.location.search);
var imgSrc = params.get("ImgSrc");
var title = params.get("title");
var date = new Date(params.get("published")).toLocaleDateString() ? new Date(params.get("published")).toLocaleDateString() : "";
var creator = params.get("creator") ? params.get("creator") : "";
var description = params.get("description");
var urlForFetch = params.get("urlForFetch") ? params.get("urlForFetch") : "";
var typeData = params.get("type");
//Nodes
var imgData = document.getElementById("img-data");
var titleData = document.getElementById("title");
var dateData = document.getElementById("date-data");
var creatorData = document.getElementById("creator-data");
var descriptionData = document.getElementById("description");
var subTitleBelow = document.getElementById("subtitle-below");
var resultsBelow = document.getElementById("results-below");
var cardsBelow = document.getElementById("cards-below");
var contentCardsBelow = "";
//Inner HTML and set attribute
imgData.setAttribute('src', "" + imgSrc);
titleData.innerHTML = "" + title;
dateData.innerHTML = "" + date;
creatorData.innerHTML = "" + creator;
descriptionData.innerHTML = "" + description;
if (typeData === "comics") {
    subTitleBelow.innerHTML = "Personajes";
}
else if (typeData === "characters") {
    subTitleBelow.innerHTML = "Comics";
}
// Fetch
// const urlData = `${charactersUrl}?ts=1&apikey=${apiKey}&hash=${hash}`
// fetch(urlData)
//             .then(res => res.json())
//             .then((characters) => {
//                 console.log(characters.data)
//                 const charactersArray = characters.data.results
//                 console.log(charactersArray.length)
//                 if (charactersArray.length === 0){
//                     resultsBelow.innerText ="0 resultados";
//                     cardsBelow.innerHTML = "<h2> No se han encontrado resultados </h2>"
//                 } else {
//                 }
//         })
