// Your public key
// 06e295e3c238e43e31ef140c424be15b
// Your private key
// fb7c2312c6804213e326c91c5d7d6683169968ae
// 1fb7c2312c6804213e326c91c5d7d6683169968ae06e295e3c238e43e31ef140c424be15b
// hash : 953044dd6187bef3005abdd0e7cf0d93
var baseUrl = "https://gateway.marvel.com:443/v1/public/";
var apiKey = "06e295e3c238e43e31ef140c424be15b";
var hash = "1eee8ff490d4a973b65d6f613e9569ff";
var searchParam = new URLSearchParams(window.location.search);
var pageNumber = 1;
var limit = 20;
var offset = 0;
var pagination;
// var noticias = ["Noticia 1", "Noticia 2", "Noticia 3"]; esto seria nuestro json.data.results
// var pageCont = Math.ceil(noticias.length / pageSize); se define adentro del fetch
var typeFilter = document.getElementById("type-filter");
var marvelCards = document.getElementById("marvel-cards");
var results = document.getElementById("results");
var searchBtn = document.getElementById("search-button");
var nextBtn = document.getElementById("next-btn");
var prevBtn = document.getElementById("prev-btn");
var firstPageBtn = document.getElementById("first-page-btn");
var older = document.getElementById("older");
var newer = document.getElementById("newer");
var sortFilter = document.getElementById("sort-filter");
// *** GET COMICS DATA ***
var getDataComics = {
    render: function (offset) {
        var urlAPI = baseUrl + "comics?ts=1&apikey=" + apiKey + "&hash=" + hash + "&limit=" + limit + "&offset=" + offset;
        var contentHTML = "";
        fetch(urlAPI)
            .then(function (res) { return res.json(); })
            .then(function (json) {
            console.log("COMICS", json);
            // Display results
            for (var _i = 0, _a = json.data.results; _i < _a.length; _i++) {
                var comic = _a[_i];
                var urlComic = comic.urls[0].url;
                var thumb = comic.thumbnail;
                var hrefData = "./data.html?title=" + comic.title + "&ImgSrc=" + comic.thumbnail.path + "." + comic.thumbnail.extension + "&published=" + comic.dates[0].date + "&description=" + comic.description + "&characters=" + comic.characters.collectionURI + "&creator=" + comic.creators.collectionURI;
                contentHTML += "\n                <div class=\"card-div\">\n                    <a href=\"" + hrefData + "\">\n                        <img src=\"" + thumb.path + "." + thumb.extension + "\" alt=\"" + comic.title + "\"  class=\"card-home\">\n                    </a>\n                    <h3>" + comic.title + "</h3>\n                </div>";
            }
            marvelCards.innerHTML = contentHTML;
            // Pagination
            var resNumber = json.data.total;
            results.innerText = resNumber + " resultados";
            var totalPages = Math.ceil(resNumber / limit);
        });
    }
};
// *** GET CHARACTERS DATA ***
var getDataCharacter = {
    render: function () {
        var urlAPI = baseUrl + "characters?ts=1&apikey=" + apiKey + "&hash=" + hash + "&limit=" + limit + "&offset=" + offset;
        var contentHTML = "";
        fetch(urlAPI)
            .then(function (res) { return res.json(); })
            .then(function (json) {
            var resNumber = json.data.total;
            results.innerText = resNumber + " resultados";
            for (var _i = 0, _a = json.data.results; _i < _a.length; _i++) {
                var hero = _a[_i];
                var urlHero = hero.urls[0].url;
                var thumb = hero.thumbnail;
                contentHTML += "\n                <div class=\"card-div\">\n                    <a href=\"" + urlHero + "\" target=\"_blank\">\n                        <img src=\"" + thumb.path + "." + thumb.extension + "\" alt=\"" + hero.name + "\"  class=\"card-home\">\n                    </a>\n                    <h3>" + hero.name + "</h3>\n                </div>";
            }
            marvelCards.innerHTML = contentHTML;
            console.log("PERSONAJES", json);
        });
    }
};
// *** PAGINATION CONTROLS ***
var nextPage = function () {
    offset += 20;
    getDataComics.render(offset);
    if (offset >= 20) {
        prevBtn.classList.remove("hidden");
        firstPageBtn.classList.remove("hidden");
    }
};
nextBtn.addEventListener("click", nextPage);
var prevPage = function () {
    offset -= 20;
    if (offset === 0) {
        prevBtn.classList.add("hidden");
        firstPageBtn.classList.add("hidden");
    }
    else {
        getDataComics.render(offset);
    }
};
prevBtn.addEventListener("click", prevPage);
// ******************
// *** SEARCH BOX ***
// ******************
// *** FILTERS ***
var filterByType = function (e) {
    if (typeFilter.value === "comics") {
        older.classList.remove("hidden");
        newer.classList.remove("hidden");
        getDataComics.render();
    }
    else if (typeFilter.value === "personajes") {
        older.classList.add("hidden");
        newer.classList.add("hidden");
        getDataCharacter.render();
    }
};
typeFilter.addEventListener("change", filterByType);
// *** INIT FUNCTION ***
var indexInit = function () {
    getDataComics.render(offset);
    prevBtn.classList.add("hidden");
    firstPageBtn.classList.add("hidden");
};
indexInit();
