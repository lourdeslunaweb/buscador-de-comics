// Your public key
// 06e295e3c238e43e31ef140c424be15b
// Your private key
// fb7c2312c6804213e326c91c5d7d6683169968ae
// 1fb7c2312c6804213e326c91c5d7d6683169968ae06e295e3c238e43e31ef140c424be15b
// hash : 953044dd6187bef3005abdd0e7cf0d93
const baseUrl: string = "https://gateway.marvel.com:443/v1/public/";
const apiKey: string = "06e295e3c238e43e31ef140c424be15b";
const hash: string = "1eee8ff490d4a973b65d6f613e9569ff";
const searchParam = new URLSearchParams(window.location.search);
let pageNumber: number = 1;
const limit = 20;
let offset = 0;
let pagination;
const typeFilter = document.getElementById("type-filter");
const marvelCards = document.getElementById("marvel-cards");
const results = document.getElementById("results");
const searchBtn = document.getElementById("search-button");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const firstPageBtn = document.getElementById("first-page-btn");
const older = document.getElementById("older");
const newer = document.getElementById("newer");
const sortFilter = document.getElementById("sort-filter");


// *** GET COMICS DATA ***
const getDataComics = {
    render: (offset) => {
        const urlAPI = `${baseUrl}comics?ts=1&apikey=${apiKey}&hash=${hash}&limit=${limit}&offset=${offset}`;
        let contentHTML = "";
        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                console.log("COMICS", json)
                // Display results
                for (const comic of json.data.results) {
                    let thumb = comic.thumbnail ? comic.thumbnail : "";
                    let comicTitle = comic.title ? comic.title : "";
                    let comicDescription = comic.description ? comic.description : "";
                    let comicDate = comic.dates[0].date ? comic.dates[0].date : "";
                    let comicCharacters = comic.characters.collectionURI ? comic.characters.collectionURI : "";
                    let guionist = [];
                    for (const prop in comic.creators.items) {
                        guionist.push(comic.creators.items[prop].name)
                    }
                    console.log(guionist);
                    console.log(comicDescription);
                    let comicCreators = guionist ? guionist : "";
                    let hrefData = `./data.html?title=${comicTitle}&ImgSrc=${thumb.path}.${thumb.extension}&published=${comicDate}&description=${comicDescription}&characters=${comicCharacters}&creator=${comicCreators}`;
                    contentHTML += `
                <div class="card-div">
                    <a href="${hrefData}">
                        <img src="${thumb.path}.${thumb.extension}" alt="${comicTitle}"  class="card-home">
                    </a>
                    <h3>${comicTitle}</h3>
                </div>`;
                }
                marvelCards.innerHTML = contentHTML;
                // Pagination
                const resNumber = json.data.total;
                results.innerText = `${resNumber} resultados`;
                const totalPages = Math.ceil(resNumber / limit);
            })
    }
}


// *** GET CHARACTERS DATA ***
const getDataCharacter = {
    render: () => {
        const urlAPI = `${baseUrl}characters?ts=1&apikey=${apiKey}&hash=${hash}&limit=${limit}&offset=${offset}`;
        let contentHTML = "";
        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                const resNumber = json.data.total
                results.innerText = `${resNumber} resultados`
                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;
                    let thumb = hero.thumbnail;
                    contentHTML += `
                <div class="card-div">
                    <a href="${urlHero}" target="_blank">
                        <img src="${thumb.path}.${thumb.extension}" alt="${hero.name}"  class="card-home">
                    </a>
                    <h3>${hero.name}</h3>
                </div>`;
                }
                marvelCards.innerHTML = contentHTML;
                console.log("PERSONAJES", json)
            })
    }
}


// *** PAGINATION CONTROLS ***
const nextPage = () => {
    offset += 20;
    getDataComics.render(offset);
    if (offset >= 20) {
        prevBtn.classList.remove("hidden");
        firstPageBtn.classList.remove("hidden");
    }
}
nextBtn.addEventListener("click", nextPage);

const prevPage = () => {
    offset -= 20;
    if (offset === 0) {
        prevBtn.classList.add("hidden");
        firstPageBtn.classList.add("hidden");
    } else {
        getDataComics.render(offset);
    }
}
prevBtn.addEventListener("click", prevPage);


// ******************
// *** SEARCH BOX ***
// ******************

// *** FILTERS ***
const filterByType = (e) => {
    if (typeFilter.value === "comics") {
        older.classList.remove("hidden");
        newer.classList.remove("hidden");
        getDataComics.render();
    } else if (typeFilter.value === "personajes") {
        older.classList.add("hidden");
        newer.classList.add("hidden");
        getDataCharacter.render();
    }
}
typeFilter.addEventListener("change", filterByType);


// *** INIT FUNCTION ***
const indexInit = () => {
    getDataComics.render(offset);
    prevBtn.classList.add("hidden");
    firstPageBtn.classList.add("hidden");
}
indexInit();