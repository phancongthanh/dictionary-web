async function putSpeech(target, pronunciation) {
    console.log({target, pronunciation})
    await fetch('/pronunciation', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({target, pronunciation})
    })
    location.assign('/view');
}

function addLetter_click(element) {
    const input = document.getElementById("pronInput");
    input.value += element.innerText;
}

function deleteLetter_click() {
    const input = document.getElementById("pronInput");
    input.value = input.value.substr(0, input.value.length - 1);
}

function saveClick() {
    const div = document.getElementById("target");
    const input = document.getElementById("pronInput");

    const target = div.innerText;
    const pronunciation = input.value;
    putSpeech(target, pronunciation)
}

function deleteClick() {
    const div = document.getElementById("target");
    const target = div.innerText;
    putSpeech(target, "")
}