const menu = document.querySelector(".navbar-links")
const menuButton = document.querySelector(".navbar-icons")

menuButton.addEventListener('click', () => {
    menu.classList.toggle("navbar-open");
    menuButton.classList.toggle("open");
})


const newWord = document.getElementById("newWordInput");
const pronunciation = document.getElementById("pronunInput");
const wordType = document.getElementById("wordTypeInput");
const vnMean = document.getElementById("vnMeanInput");
const enMean = document.getElementById("enMeanInput");
const example = document.getElementById("exampleInput");
const synonym = document.getElementById("synonymInput");


var tempWord;
var tempPronunciation;
var tempWordType;
var tempVnMean;
var tempEnMean;
var tempExample;
var tempSynonym;



const addButton = document.querySelector(".btn");
//const pronunContent =document.getElementById("pronunciation-input");
addButton.addEventListener('click', () => {
    
    tempWord = newWord.value;
    tempPronunciation = pronunciation.value;
    tempWordType = wordType.value;
    tempVnMean = vnMean.value;
    tempEnMean = enMean.value;
    tempExample = example.value;
    tempSynonym = synonym.value;


    console.log(tempEnMean);

});


