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



// const addButton = document.querySelector(".btn");
// //const pronunContent =document.getElementById("pronunciation-input");
// addButton.addEventListener('click', () => {
    
//     tempWord = newWord.value;
//     tempPronunciation = pronunciation.value;
//     tempWordType = wordType.value;
//     tempVnMean = vnMean.value;
//     tempEnMean = enMean.value;
//     tempExample = example.value;
//     tempSynonym = synonym.value;


//     console.log(tempEnMean);

// });
async function addWord(target, pronunciation,vnMeaning,enMeaning,format,synonyms,example){
    console.log({target, pronunciation,vnMeaning,enMeaning,format,synonyms,example})
    // const host = "http://" + document.getElementById("host").value;
    const url = "/word";
    await fetch( url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({target, pronunciation,vnMeaning,enMeaning,format,synonyms,example})
    });
    location.assign('/view');
}
function saveClick() {
    const word=document.getElementById("newWordInput");
    const pro = document.getElementById("pronunInput");
    const Vn = document.getElementById("vnMeanInput");
    const En = document.getElementById("enMeanInput");
    const ex = document.getElementById("exampleInput");
    const syn = document.getElementById("synonymInput");
    const form = document.getElementById("wordTypeInput");
    
    const target = word.value;
    const pronunciation = pro.value;
    const vnMeaning = Vn.value;
    const enMeaning = En.value;
    const example = ex.value;
    const synonyms = syn.value;
    const format = form.value;
    addWord(target, pronunciation,vnMeaning,enMeaning,format,synonyms,example)
}

