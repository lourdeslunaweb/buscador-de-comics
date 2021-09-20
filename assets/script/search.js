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
var refreshComicTable = function (offset) {
    contentHTML = "";
    var urlAPI = baseUrl + "comics?ts=1&apikey=" + apiKey + "&hash=" + hash + "&limit=" + limit + "&offset=" + offset;
    fetch(urlAPI)
        .then(function (res) { return res.json(); })
        .then(function (json) {
        var totalResults = json.data.total ? json.data.total : "No hay resultados";
        results.innerText = totalResults + " resultados";
        var comics = json.data.results;
        // console.log(comics)
        for (var _i = 0, comics_1 = comics; _i < comics_1.length; _i++) {
            var comic = comics_1[_i];
            var thumb = comic.thumbnail ? comic.thumbnail : "";
            var comicTitle = comic.title ? comic.title : "Title not available";
            var comicDescription = comic.description ? comic.description : "Description not available";
            var comicDate = comic.dates[0].date ? comic.dates[0].date : "Date not available";
            var comicCharacters = comic.characters.collectionURI ? comic.characters.collectionURI : "";
            var guionist = [];
            for (var prop in comic.creators.items) {
                guionist.push(comic.creators.items[prop].name);
            }
            var comicCreators = guionist ? guionist : "";
            var hrefData = "./data.html?type='comics'&title=" + comicTitle + "&ImgSrc=" + thumb.path + "." + thumb.extension + "&published=" + comicDate + "&description=" + comicDescription + "&urlForFetch=" + comicCharacters + "&creator=" + comicCreators;
            contentHTML += "\n            <div class=\"card-div\">\n                <a href=\"" + hrefData + "\">\n                    <img src=\"" + thumb.path + "." + thumb.extension + "\" alt=\"" + comicTitle + "\"  class=\"card-home\">\n                </a>\n                <h3>" + comicTitle + "</h3>\n            </div>";
        }
        marvelCards.innerHTML = contentHTML;
    });
};
var refreshCharacterTable = function (offset) {
    contentHTML = "";
    var urlAPI = baseUrl + "characters?ts=1&apikey=" + apiKey + "&hash=" + hash + "&limit=" + limit + "&offset=" + offset;
    fetch(urlAPI)
        .then(function (res) { return res.json(); })
        .then(function (json) {
        var totalResults = json.data.total ? json.data.total : "No hay resultados";
        results.innerText = totalResults + " resultados";
        var characters = json.data.results;
        for (var _i = 0, characters_1 = characters; _i < characters_1.length; _i++) {
            var character = characters_1[_i];
            var thumb = character.thumbnail ? character.thumbnail : "Name not available";
            var characterName = character.name ? character.name : "";
            var characterDescription = character.description ? character.description : "Description not available";
            var comicUrl = character.comics.collectionURI ? character.comics.collectionURI : "";
            var hrefData = "./data.html?type='characters'&title=" + characterName + "&ImgSrc=" + thumb.path + "." + thumb.extension + "&description=" + characterDescription + "&urlForFetch=" + comicUrl;
            console.log(hrefData);
            contentHTML += "\n            <div class=\"card-div\">\n                <a href=\"" + hrefData + "\">\n                    <img src=\"" + thumb.path + "." + thumb.extension + "\" alt=\"" + characterName + "\"  class=\"card-home\">\n                </a>\n                <h3>" + characterName + "</h3>\n            </div>";
        }
        marvelCards.innerHTML = contentHTML;
    });
};
var refreshTablesByTypes = function (e) {
    if (typeFilter.value === "comics") {
        refreshComicTable(offset);
    }
    else if (typeFilter.value === "characters") {
        refreshCharacterTable(offset);
    }
};
typeFilter.addEventListener("change", refreshTablesByTypes);
var init = function () {
    refreshComicTable(offset);
};
init();
// case "a-z":
//       operations.sort((a, b) => {
//         if (a.description > b.description) { return 1 }
//         if (a.description < b.description) { return -1 }
//         a must be equal to b
//         return 0;
// const sortByAz = (array) => {
//     array.sort((a, b) => {
//         if (a.title > b.title) { return 1 };
//         if (a.title < b.title) { return -1 };
//         return 0
//     })
// }
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
