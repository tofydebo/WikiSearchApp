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

//function putResults(sResults) {
const putResults = (sResults) => {

  const searchResultUI = document.querySelector('.results');

  searchResultUI.innerHTML = '';

  let searchResultString = '';

  sResults.forEach(result => {

    searchResultString += `
    <div class="result">
   <div> <h2 id="resultTitle"></h2>  <div>
   <div class="resultBody"> 
   <p></p>
    <p></p>
    <a href="" target="blank" class="more"></a>
    <div>
    </div>
    `
  });

  searchResultUI.innerHTML = searchResultString;
}
