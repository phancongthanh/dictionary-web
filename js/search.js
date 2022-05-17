
const menu = document.querySelector(".navbar-links")
const menuButton = document.querySelector(".navbar-icons")

menuButton.addEventListener('click', () => {
    menu.classList.toggle("navbar-open");
    menuButton.classList.toggle("open");
})

// getting all required elements
const searchWrapper = document.querySelector(".body-inputs");
const inputBox = searchWrapper.querySelector(".body-input");
const suggBox = searchWrapper.querySelector(".dropbox");
// const icon = searchWrapper.querySelector(".icon");
// let linkTag = searchWrapper.querySelector("a");
// let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
    // console.log(e.target.value);
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {

        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());;
        });
        //  console.log(emptyArray);
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = '<li>' + data + '</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box

    }

}

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    // icon.onclick = ()=>{
    //     webLink = `https://www.google.com/search?q=${selectData}`;
    //     linkTag.setAttribute("href", webLink);
    //     linkTag.click();
    // }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
const searchWord = document.querySelector(".body-input");
const retWord = document.getElementById("word-out");
const pronunciation = document.getElementById("pronunciation-out");
const wordType = document.getElementById("type-out");
const vnMean = document.getElementById("vn-out");
const enMean = document.getElementById("en-out")
const example = document.getElementById("example-out");
const synonym = document.getElementById("synonym-out");


var tempWord = "lmao1";
var tempPronunciation = "lmao2";
var tempWordType = "lmao3";
var tempVnMean = "lmao4";
var tempEnMean = "lmao5";
var tempExample = "lmao6";
var tempSynonym = "lmao7";



const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
    tempWord = searchWord.value;
    if (tempWord == "play") {
        retWord.textContent = tempWord;
        pronunciation.textContent = tempPronunciation;
        wordType.textContent = tempWordType;
        vnMean.textContent = tempVnMean;
        enMean.textContent = tempEnMean;
        example.textContent = tempExample;
        synonym.textContent = tempSynonym;
    } else {
        retWord.textContent = "occko";
        wordType.textContent = "lmao";
        vnMean.textContent = "bủh";
        enMean.textContent = "bruhhh";
    }
});