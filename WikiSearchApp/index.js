const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
    let query = document.querySelector(".input").value;
query = query.trim();
getResults(query);
}

function getResults(query) {
const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&origin=*&srlimit=25&utf8=&format=json&srsearch=${query}`;

fetch(url)
.then((res) => res.json())
.then((data) => {
  putResults(data.query.search);
})
.catch((e) => console.log(`ERROR// : ${e}`));
}

const putResults = (sResults) => {
  const relevantResults = sResults.slice(0, 2);


//declare the variable to the strings
let searchResultString = '';

//get the UI element for the results
const searchResultsUI = document.querySelector('.results');

//loop through the relevant results
relevantResults.forEach(result => {

searchResultString += `
<div class="result">
<div>
<h2 id="resultTitle">
${result.title}
</h2>
</div>
<div class="resultSnippet">
<p>${result.snippet}</p>
<a href="${encodeURI(`https://en.wikipedia.org/wiki/${result.title}`)}"> <button class="button2"> Read more </button> </a>
</div>
</div>
`
})

searchResultsUI.innerHTML = searchResultString;
}

