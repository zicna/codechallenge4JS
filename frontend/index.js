const ul = document.getElementById("art-list");
const URL = "http://localhost:3000/categories";

function fetchArt() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => renderData(data));
}

function renderData(data) {
  const ul = document.getElementById("art-list");
  const categories = data["data"];
  const art = data["included"];
  renderCat(ul, categories);
  renderArt(ul, art);
}

function renderArt(ul, art) {
  for (d of art) {
    const name = d.attributes.name;
    const image = d.attributes.image;
    const imageTag = document.createElement("img");
    imageTag.src = image;

    const li = document.createElement("li");
    li.innerHTML = name;
    li.appendChild(imageTag);
    ul.appendChild(li);
  }
}
function renderCat(ul, categories) {
  for (d of categories) {
    const name = d.attributes.name;
    const li = document.createElement("li");
    li.innerHTML = name;
    ul.appendChild(li);
  }
}

const form = document.getElementById("art-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("art-name");
  const artist = document.getElementById("art-artist");
  const year = document.getElementById("art-year");
  const image = document.getElementById("art-image");

  const itemInfo = {
    name: name.value,
    artist: artist.value,
    year: year.value,
    image: image.value,
  };
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(itemInfo),
  };
  fetch(URL, configObj)
    .then((response) => response.json())
    .then((data) => {
      debugger;
    });
}

fetchArt();
