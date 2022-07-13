// dom
var loader = document.querySelector(".loader");
let submit = document.querySelector(".submit");
let inputName = document.querySelector(".name");
let inputlast = document.querySelector(".lname");
// dom
// fun loader
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disppear");
}
// fun loader
// event message
submit.addEventListener("click", function () {
  if (inputName.value != "" && inputlast.value != "") {
    let body = document.body;
    let box = document.createElement("div");
    let btnBack = document.createElement("button");
    let form = document.querySelector("form");
    btnBack.className = "btnBack";
    box.className = "box";
    body.append(box);
    box.innerHTML = `<h4>Hey ${inputName.value} ${inputlast.value}
  </h4><h4>Thanks for your message we will get back to you soon</h4>
  <a class="a" href="/home/home.html"><button class="btn">click to back home</button></a>`;
    body.style = "background-color: rgba(0, 0, 0, 0.851);";
    form.style = "display: none !important;";
    // localStorage
    localStorage.setItem(inputName.value, inputlast.value);
    // localStorage
  } else {
    alert("Please fill in all required fields");
  }
});
// event message
