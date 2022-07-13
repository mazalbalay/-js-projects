// carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
// carousel
// loader
var loader = document.querySelector(".loader");
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disppear");
}
// loader
// async fun fetch
async function getUserAsyncDelivery2(api) {
  let response = await fetch(api);
  let data = await response.json();
  data = data.hits;
  //fun get data
  function dataDisply(newData) {
    let imgArr = document.querySelectorAll(".card-img-top");
    let titelArr = document.querySelectorAll(".titel");
    for (let i = 0; i < imgArr.length; i++) {
      imgArr[i].src = `${newData[i].recipe.image}`;
      titelArr[i].innerHTML = `${newData[i].recipe.label}`;
    }
    return newData;
  }
  dataDisply(data);
}
// async fun fetch
getUserAsyncDelivery2(
  "https://api.edamam.com/api/recipes/v2?type=public&q=Dessert&app_id=c200b080&app_key=d4e33ef484921f29fcc246e7fa60e28f",
);
//async fun get data
