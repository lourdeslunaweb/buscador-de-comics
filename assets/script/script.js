// Your public key
// 06e295e3c238e43e31ef140c424be15b
// Your private key
// fb7c2312c6804213e326c91c5d7d6683169968ae
// 1fb7c2312c6804213e326c91c5d7d6683169968ae06e295e3c238e43e31ef140c424be15b
// hash : 953044dd6187bef3005abdd0e7cf0d93
//definir types
var getDataCharacter = {
    render: function () {
        var urlAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=06e295e3c238e43e31ef140c424be15b&hash=1eee8ff490d4a973b65d6f613e9569ff";
        var marvelCards = document.getElementById("marvel-cards");
        var contentHTML = "";
        fetch(urlAPI)
            .then(function (res) { return res.json(); })
            .then(function (json) {
            for (var _i = 0, _a = json.data.results; _i < _a.length; _i++) {
                var hero = _a[_i];
                var urlHero = hero.urls[0].url;
                var thumb = hero.thumbnail;
                contentHTML += "\n                <div class=\"card-div\">\n                    <a href=\"" + urlHero + "\" target=\"_blank\">\n                        <img src=\"" + thumb.path + "." + thumb.extension + "\" alt=\"" + hero.name + "\"  class=\"card-home\">\n                    </a>\n                    <h3>" + hero.name + "</h3>\n                </div>";
            }
            marvelCards.innerHTML = contentHTML;
            // console.log(json,'RES.JSON')
        });
    }
};
getDataCharacter.render();
var getDataComics = {
    render: function () {
        var urlAPI = "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=06e295e3c238e43e31ef140c424be15b&hash=1eee8ff490d4a973b65d6f613e9569ff";
        var marvelCards = document.getElementById("marvel-cards2");
        var contentHTML = "";
        fetch(urlAPI)
            .then(function (res) { return res.json(); })
            .then(function (json) {
            for (var _i = 0, _a = json.data.results; _i < _a.length; _i++) {
                var comic = _a[_i];
                var urlComic = comic.urls[0].url;
                var thumb = comic.thumbnail;
                contentHTML += "\n                <div class=\"card-div\">\n                    <a href=\"" + urlComic + "\" target=\"_blank\">\n                        <img src=\"" + thumb.path + "." + thumb.extension + "\" alt=\"" + comic.title + "\"  class=\"card-home\">\n                    </a>\n                    <h3>" + comic.title + "</h3>\n                </div>";
            }
            marvelCards.innerHTML = contentHTML;
            console.log(json, 'RES.JSON');
        });
    }
};
getDataComics.render();
