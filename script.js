const translateButtonEl = document.querySelector("#translate-button");
const inputEl = document.querySelector("#translate-input");
const outputEl = document.querySelector("#translate-output");
const SERVER_URL = "https://api.funtranslations.com/translate/shakespeare.json"

translateButtonEl.addEventListener("click", function btnHandler() {
  const inputText = inputEl.value;
  fetch(`${SERVER_URL}?text=${encodeURI(inputText)}`)
    .then((response) => response.json())
    .then((json) => {
      outputEl.innerText = json.contents.translated;
    })
    .catch((e)=>console.log(e));
});