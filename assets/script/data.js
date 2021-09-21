// *******************************************
// *** Display selected card in data.html ***
// *******************************************
//Params
var params = new URLSearchParams(window.location.search);
var typeData = params.get('type');
var cardId = params.get('id');
//Nodes
var cardData = document.getElementById("card-data");
var subTitleBelow = document.getElementById("subtitle-below");
var resultsBelow = document.getElementById("results-below");
var cardsBelow = document.getElementById("cards-below");
var cardHTML;
var cardsBelowHTML;
//Fetch for selected Card
var displaySelectedCard = function (type, id) {
    cardHTML = "";
    var urlAPI = baseUrl + "/" + type + "/" + id + "?apikey=" + apiKey;
    fetch(urlAPI)
        .then(function (res) { return res.json(); })
        .then(function (json) {
        var selectedCard = json.data.results[0];
        var cardTitle = selectedCard.title ? selectedCard.title : selectedCard.name;
        var thumb = selectedCard.thumbnail;
        var cardDescription = selectedCard.description ? selectedCard.description : "Description not available";
        var auxDate;
        var cardDate;
        if (selectedCard.dates) {
            auxDate = selectedCard.dates[0].date;
            cardDate = new Date(auxDate).toLocaleDateString();
        }
        else {
            auxDate = "";
            cardDate = "";
        }
        var guionist = [];
        var comicCreators;
        if (selectedCard.creators) {
            for (var prop in selectedCard.creators.items) {
                guionist.push(selectedCard.creators.items[prop].name);
            }
            comicCreators = guionist;
        }
        else {
            comicCreators = "";
        }
        var infoURL;
        if (selectedCard.characters) {
            infoURL = selectedCard.characters.collectionURI;
        }
        else if (selectedCard.comics) {
            infoURL = selectedCard.comics.collectionURI;
        }
        var typeBelow;
        if (type === "comics") {
            typeBelow = "characters";
        }
        else if (type === "characters") {
            typeBelow = "comics";
        }
        displayInfoBelow(infoURL, typeBelow);
        cardHTML = "\n            <div class=\"img-data\">\n            <img src=\"" + thumb.path + "." + thumb.extension + "\" alt=\"ComicImg/HeroImg\">\n        </div>\n        <div class=\"text-data\">\n            <h3 class=\"item-data\">" + cardTitle + "</h3>\n            <div class=\"item-data\">\n                <h4>Publicado:</h4>\n                <p>" + cardDate + "</p>\n            </div>\n            <div class=\"item-data\" id=\"creator-data\">\n                <h4>Guionistas:</h4>\n                <p>" + comicCreators + "</p>\n            </div>\n            <div class=\"item-data\" id=\"description\">\n                <h4>Descripci\u00F3n:</h4>\n                <p>" + cardDescription + "</p>\n            </div>\n        </div>";
        cardData.innerHTML = cardHTML;
    });
};
displaySelectedCard(typeData, cardId);
// Fetch for infoURL
var displayInfoBelow = function (url, type) {
    cardsBelowHTML = "";
    var subTitle;
    if (type === "characters") {
        subTitle = "Personajes";
    }
    else if (type === "comics") {
        subTitle = "Comics";
    }
    subTitleBelow.innerText = subTitle;
    var urlAPI = url + "?apikey=" + apiKey;
    fetch(urlAPI)
        .then(function (res) { return res.json(); })
        .then(function (json) {
        var cardsBelow = json.data.results;
        console.log(cardsBelow);
        resultsBelow.innerText = cardsBelow.length + " resultados";
        if (cardsBelow.length > 0) {
            for (var _i = 0, cardsBelow_1 = cardsBelow; _i < cardsBelow_1.length; _i++) {
                var card = cardsBelow_1[_i];
                var cardTitle = card.title ? card.title : card.name;
                var thumb = card.thumbnail ? card.thumbnail : "";
                var hrefData = "./data.html?type=" + type + "&id=" + card.id;
                cardsBelowHTML += "\n            <div class=\"card-div\">\n                <a href=\"" + hrefData + "\">\n                    <img src=\"" + thumb.path + "." + thumb.extension + "\" alt=\"" + cardTitle + "\"  class=\"card-home\">\n                </a>\n                <h3>" + cardTitle + "</h3>\n            </div>";
            }
            cardsBelow.innerHTML = cardsBelowHTML;
        }
    });
};
