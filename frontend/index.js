const ul = document.getElementById("art-list");
const URL = "http://localhost:3000/categories";

function fetchArt() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

fetchArt();
