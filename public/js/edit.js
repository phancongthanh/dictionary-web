const menu=document.querySelector(".navbar-links")
const menuButton=document.querySelector(".navbar-icons")

menuButton.addEventListener('click', ()=>{
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
inputBox.onkeyup = (e)=>{
    // console.log(e.target.value);
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());;
        });
        //  console.log(emptyArray);
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+data+'</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
       
   }
    
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    // icon.onclick = ()=>{
    //     webLink = `https://www.google.com/search?q=${selectData}`;
    //     linkTag.setAttribute("href", webLink);
    //     linkTag.click();
    // }
     searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+userValue+'</li>';
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

async function getWord(target) {
    const url = "/word?target=" + target;
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    try {
        return response.json();
    } catch(err) {
        return {
            target: '',
            pronunciation: '',
            vnMeaning: '',
            enMeaning: '',
            format: '',
            synonyms: '',
            example: ''
        };
    }
}


const wordSearch = document.getElementById("searchword");
const wordFix = document.getElementById("newWordInput");
const pronunFix = document.getElementById("pronunInput");
const wordTypeFix = document.getElementById("wordTypeInput");
const vnMeanFix = document.getElementById("vnMeanInput");
const enMeanFix = document.getElementById("enMeanInput");
const exampleFix = document.getElementById("exampleInput");
const synonymFix = document.getElementById("synonymInput");



async function getClick() {
    const ab = wordSearch.value;
    const returnWord =await getWord(ab);
    wordFix.value = returnWord.target;
    pronunFix.value = returnWord.pronunciation;
    vnMeanFix.value = returnWord.vnMeaning;
    exampleFix.value = returnWord.example;
    synonymFix.value = returnWord.synonyms;
    enMeanFix.value = returnWord.enMeaning;
    wordTypeFix.value= returnWord.format;
}
async function getEdit(target, pronunciation,vnMeaning,enMeaning,format,synonyms,example) {
    const url = "/word?target=" + target;
            // const body = JSON.stringify(pronunciation,vnMeaning,enMeaning,format,synonyms,example);
             await fetch( url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({target, pronunciation,vnMeaning,enMeaning,format,synonyms,example})
            });
            //location.assign('/view');
}
function getSubmit(){
    
    const target = wordFix.value;
    const pronunciation = pronunFix.value;
    const vnMeaning = vnMeanFix.value;
    const enMeaning = enMeanFix.value;
    const example = exampleFix.value;
    const synonyms = synonymFix.value;
    const format = wordTypeFix.value;
    getEdit(target, pronunciation,vnMeaning,enMeaning,format,synonyms,example);
    alert("SUCCESS!")
}





