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
const characters = params.get("characters");
console.log(title, imgSrc, date, description, characters, creator);
//Nodes
const imgData = document.getElementById("img-data");
const titleData = document.getElementById("title");
const dateData = document.getElementById("date-data");
const creatorData = document.getElementById("creator-data");
const descriptionData = document.getElementById("description");



//Inner HTML and set attribute
imgData.setAttribute('src', `${imgSrc}`);
titleData.innerHTML= `${title}`;
dateData.innerHTML = `${date}`;
creatorData.innerHTML = `${creator}`;
descriptionData.innerHTML = `${description}`;



