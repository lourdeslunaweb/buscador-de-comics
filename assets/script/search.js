// ******************
// *** SEARCH BOX ***
// ******************
var baseUrl = "https://gateway.marvel.com:443/v1/public/";
var apiKey = "06e295e3c238e43e31ef140c424be15b";
var hash = "1eee8ff490d4a973b65d6f613e9569ff";
var typeFilter = document.getElementById("type-filter");
var limit = 20;
var offset = 0;
var searchInput = document.getElementById("search-input");
var results = document.getElementById("results");
var older = document.getElementById("older");
var newer = document.getElementById("newer");
var sortFilter = document.getElementById("sort-filter");
var searchBtn = document.getElementById("search-button");
var marvelCards = document.getElementById("marvel-cards");
var typeUrl = typeFilter.value;
var contentHTML = "";
var refreshCardTable = function (typeUrl) {
    var urlAPI = "" + baseUrl + typeUrl + "?ts=1&apikey=" + apiKey + "&hash=" + hash + "&limit=" + limit + "&offset=" + offset;
    fetch(urlAPI)
        .then(function (res) { return res.json(); })
        .then(function (json) {
        var totalResults = json.data.total ? json.data.total : "";
        results.innerText = totalResults + " resultados";
        var comics = json.data.results;
        for (var _i = 0, comics_1 = comics; _i < comics_1.length; _i++) {
            var comic = comics_1[_i];
            var thumb = comic.thumbnail ? comic.thumbnail : "";
            var comicTitle = comic.title ? comic.title : "";
            var comicDescription = comic.description ? comic.description : "";
            var comicDate = comic.dates[0].date ? comic.dates[0].date : "";
            var comicCharacters = comic.characters.collectionURI ? comic.characters.collectionURI : "";
            var guionist = [];
            for (var prop in comic.creators.items) {
                guionist.push(comic.creators.items[prop].name);
            }
            var comicCreators = guionist ? guionist : "";
            var hrefData = "./data.html?type=" + typeUrl + "&title=" + comicTitle + "&ImgSrc=" + thumb.path + "." + thumb.extension + "&published=" + comicDate + "&description=" + comicDescription + "&characters=" + comicCharacters + "&creator=" + comicCreators;
            contentHTML += "\n            <div class=\"card-div\">\n                <a href=\"" + hrefData + "\">\n                    <img src=\"" + thumb.path + "." + thumb.extension + "\" alt=\"" + comicTitle + "\"  class=\"card-home\">\n                </a>\n                <h3>" + comicTitle + "</h3>\n            </div>";
        }
        marvelCards.innerHTML = contentHTML;
    });
};
refreshCardTable("comics");
// case "a-z":
//       operations.sort((a, b) => {
//         if (a.description > b.description) { return 1 }
//         if (a.description < b.description) { return -1 }
//         a must be equal to b
//         return 0;
var sortByAz = function (array) {
    array.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        }
        ;
        if (a.title < b.title) {
            return -1;
        }
        ;
        return 0;
    });
};
// *** FILTERS ***
// const filterByType = () => {
//     typeFilter.value === "comics"
//         older.classList.remove("hidden");
//         newer.classList.remove("hidden");
//         getDataComics.render(offset);
//     }
// let contentHTML = "";
// const search = (input,type,filter) => {
//     let object = typeFilter.value;
//     const urlAPI = `${baseUrl}${object}?ts=1&apikey=${apiKey}&hash=${hash}&limit=${limit}&offset=${offset}`;
//     // COMIC FILTERS
//     fetch(urlAPI)
//     .then(res => res.json())
//     .then((json) => {
//         const comics:Comic[] = json.data.results;
//         // console.log(comics,characters)
//         // *** FILTERS ***
//         const filterByType = () => {
//             typeFilter.value === "comics"
//                 older.classList.remove("hidden");
//                 newer.classList.remove("hidden");
//                 getDataComics.render(offset);
//             }
//             typeFilter.addEventListener("change", filterByType);
// }
// orden : {
//     az: () => {},
//     za: () => {},
//     newer: () => {},
//     older: () => {},
// }
// fetch(urlAPI)
// .then(res => res.json())
// .then((json) => {
//     const characters:Comic[] = json.data.results;
//     // console.log(comics,characters)
// })
// // // *** INPUT ***
// const comicsByWord:Comic[] = [];
// const filterByWord = () => {
//     let inputLower = searchInput.value.toLowerCase();
//     // console.log(input)
//     let input = inputLower.split(' ');
//     for (let word of input) {
//         for (let comic of comics) {
//             let comicTitle = comic.title.toLowerCase();
//             if (comicTitle.includes(word)) {
//                 comicsByWord.push(comic)
//             }
//         }
//     }
//     // console.log(comicsByWord)
//     refreshBySearch(comicsByWord)
//     // return comicsByWord
// }
// searchBtn.addEventListener("click",filterByWord);
