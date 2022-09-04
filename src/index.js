var res = document.querySelector(".clicked");
var inptext = document.querySelector("#text");
var outputtext = document.querySelector(".optext");

var url = "https://api.funtranslations.com/translate/minion.json";
function getURL(text) {
  return `${url}?text=${text}`;
}

function errorHandler(error) {
  console.log("error occured", error);
}

function newfun() {
  var inputText = inptext.value;
  fetch(getURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var val = json.contents.translated;
      outputtext.innerText = val;
    })
    .catch(errorHandler);
}

res.addEventListener("click", newfun);
