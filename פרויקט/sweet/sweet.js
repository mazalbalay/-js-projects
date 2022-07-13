// dom
let body = document.body;
let containerBox = document.querySelector(".container-box");
let input = document.querySelector("input");
// dom
// loader
var loader = document.querySelector(".loader");
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disppear");
}
// loader
// async fun  get data
async function getUserAsyncsweet() {
  let response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=Dessert&app_id=c200b080&app_key=d4e33ef484921f29fcc246e7fa60e28f`,
  );
  let data = await response.json();

  data = data.hits;
  function datasweet(newData) {
    containerBox.innerHTML = "";
    newData.forEach((newDataMap) => {
      // create element
      let box = document.createElement("div");
      box.className = "box";
      let btn = document.createElement("button");
      btn.className = "btn";
      let btnBack = document.createElement("button");
      btnBack.className = "btnBack";
      let img = document.createElement("img");
      img.className = "img";
      let h1Name = document.createElement("h4");
      h1Name.className = "h1Name";
      let h3Ctegory = document.createElement("h6");
      h3Ctegory.className = "h3Ctegory";
      let ingredient = document.createElement("div");
      ingredient.className = "ingredient";
      let divSourceUrl = document.createElement("div");
      divSourceUrl.className = "divSourceUrl";
      let leftDiv = document.createElement("div");
      leftDiv.className = "leftDiv";
      let rightDiv = document.createElement("div");
      rightDiv.className = "rightDiv";
      // create element
      // append
      containerBox.append(box);
      box.append(leftDiv);
      box.append(rightDiv);
      leftDiv.append(ingredient);
      leftDiv.append(divSourceUrl);
      rightDiv.append(img);
      rightDiv.append(h1Name);
      rightDiv.append(h3Ctegory);
      rightDiv.append(btn);
      rightDiv.append(btnBack);
      // append
      // style/content
      img.src = `${newDataMap.recipe.image}`;
      h1Name.innerHTML = newDataMap.recipe.label;
      h3Ctegory.innerHTML = newDataMap.recipe.mealType[0];
      btn.innerText = "click for more";
      btnBack.innerText = "click to back";
      // map
      newDataMap.recipe.ingredientLines.forEach((newDataMap) => {
        let pingredient = document.createElement("p");
        pingredient.className = "pingredient";
        ingredient.append(pingredient);
        pingredient.innerHTML = newDataMap;
      });
      // map
      divSourceUrl.innerHTML = `<a href=${newDataMap.recipe.url}> ${newDataMap.recipe.url} </a>`;
      // style/content
      btn.addEventListener("click", function () {
        box.classList.remove("box");
        box.classList.add("boxFull");
      });
      // event btn go back
      btnBack.addEventListener("click", function () {
        box.classList.remove("boxFull");
        box.classList.add("box");
      });
      // event btn go back
      return newDataMap;
    });
  }
  datasweet(data);
  // filter data
  function filter() {
    let filterData = data.filter(function (newDataMap) {
      return newDataMap.recipe.label
        .toLowerCase()
        .includes(input.value.toLowerCase());
    });
    datasweet(filterData);
  }
  // filter data
  // event btn go back
  input.addEventListener("keyup", function () {
    filter();
    console.log(input.value);
  });
  // event btn go back
}
// async fun  get data
getUserAsyncsweet();
