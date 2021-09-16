// *****************************
// *** Set Variables in Data ***
// *****************************
//Params
var params = new URLSearchParams(window.location.search);
var imgSrc = params.get("ImgSrc");
var title = params.get("title");
var date = new Date(params.get("published")).toLocaleDateString();
var creator = params.get("creator");
var description = params.get("description");
var characters = params.get("characters");
console.log("Creator:", creator);
console.log("----------------------------");
console.log("Characters", characters);
//Nodes
var imgData = document.getElementById("img-data");
var titleData = document.getElementById("title");
var dateData = document.getElementById("date-data");
var creatorData = document.getElementById("creator-data");
var descriptionData = document.getElementById("description");
//Inner HTML and set attribute
imgData.setAttribute('src', "" + imgSrc);
titleData.innerHTML = "" + title;
dateData.innerHTML = "" + date;
creatorData.innerHTML = "" + creator;
descriptionData.innerHTML = "" + description;
