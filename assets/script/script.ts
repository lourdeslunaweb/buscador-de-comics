const typeFilter = document.getElementById("type-filter");
const marvelCards = document.getElementById("marvel-cards");
const searchBtn = document.getElementById("search-button");

const getDataComics = {
    render: () => {
        const urlAPI = "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=06e295e3c238e43e31ef140c424be15b&hash=1eee8ff490d4a973b65d6f613e9569ff";
        let contentHTML = "";
        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            for(const comic of json.data.results){
                let urlComic = comic.urls[0].url;
                let thumb = comic.thumbnail;
                contentHTML+= `
                <div class="card-div">
                    <a href="${urlComic}" target="_blank">
                        <img src="${thumb.path}.${thumb.extension}" alt="${comic.title}"  class="card-home">
                    </a>
                    <h3>${comic.title}</h3>
                </div>`;
            }
            marvelCards.innerHTML = contentHTML;
            console.log("COMICS", json)
        })
    }
}

const getDataCharacter = {
    render: () => {
        const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=06e295e3c238e43e31ef140c424be15b&hash=1eee8ff490d4a973b65d6f613e9569ff";
        let contentHTML = "";
        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                let thumb = hero.thumbnail;
                contentHTML+= `
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




const filterByType = (e) =>{
    if(typeFilter.value === "comics"){
        getDataComics.render();
    } else if (typeFilter.value === "personajes"){
        getDataCharacter.render();
    } 
}

searchBtn.addEventListener("click", filterByType);





// Your public key
// 06e295e3c238e43e31ef140c424be15b

// Your private key
// fb7c2312c6804213e326c91c5d7d6683169968ae

// 1fb7c2312c6804213e326c91c5d7d6683169968ae06e295e3c238e43e31ef140c424be15b
// hash : 953044dd6187bef3005abdd0e7cf0d93

//definir types


const indexInit =() =>{
    getDataComics.render();
}
indexInit();