// ******************
// *** SEARCH BOX ***
// ******************
var contentHTML = "";
var search = function (input, type, filter) {
    var object = typeFilter.value;
    var urlAPI = "" + baseUrl + object + "?ts=1&apikey=" + apiKey + "&hash=" + hash + "&limit=" + limit + "&offset=" + offset;
    // COMIC FILTERS
    fetch(urlAPI)
        .then(function (res) { return res.json(); })
        .then(function (json) {
        var comics = json.data.results;
        // console.log(comics,characters)
        // *** FILTERS ***
        var filterByType = function () {
            typeFilter.value === "comics";
            older.classList.remove("hidden");
            newer.classList.remove("hidden");
            getDataComics.render(offset);
        };
        typeFilter.addEventListener("change", filterByType);
    });
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
};
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
