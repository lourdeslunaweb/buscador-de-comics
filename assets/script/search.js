// // ******************
// // *** SEARCH BOX ***
// // ******************
// let contentHTML = "";
// const search = (input,type,filter) => {
//     let object = typeFilter.value;
//     const urlAPI = `${baseUrl}${object}?ts=1&apikey=${apiKey}&hash=${hash}&limit=${limit}&offset=${offset}`;
//     // COMIC FILTERS
//     fetch(urlAPI).then(res => res.json()).then((json) => {
//         const comics:Comic[] = json.data.results;
//         // console.log(comics,characters)
//         // *** FILTERS ***
//         const filterByType = () => {
//             typeFilter.value === "comics"
//             older.classList.remove("hidden");
//             newer.classList.remove("hidden");
//             getDataComics.render(offset);
//         }
//         typeFilter.addEventListener("change", filterByType);
// }
//     // orden : {
//     //     az: () => {},
//     //     za: () => {},
//     //     newer: () => {},
//     //     older: () => {},
//     // }
// // fetch(urlAPI)
// // .then(res => res.json())
// // .then((json) => {
// //     const characters:Comic[] = json.data.results;
// //     // console.log(comics,characters)
// // })
// // // // *** INPUT ***
// // const comicsByWord:Comic[] = [];
// // const filterByWord = () => {
// //     let inputLower = searchInput.value.toLowerCase();
// //     // console.log(input)
// //     let input = inputLower.split(' ');
// //     for (let word of input) {
// //         for (let comic of comics) {
// //             let comicTitle = comic.title.toLowerCase();
// //             if (comicTitle.includes(word)) {
// //                 comicsByWord.push(comic)
// //             }                       
// //         } 
// //     }
// //     // console.log(comicsByWord)
// //     refreshBySearch(comicsByWord)
// //     // return comicsByWord
// // }  
// // searchBtn.addEventListener("click",filterByWord);
