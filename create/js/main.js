import "../styles/style.css";
import { array } from "../js/array";
import { DOM } from "../js/DOM";

DOM.dunkbtn.addEventListener("click", function () {
  DOM.mainpage.innerHTML = "";
  DunkArray();
});

function DunkArray() {
  array
    .filter((array) => array.Type === "WorstDunk")
    .forEach((array) =>
      DOM.mainpage.insertAdjacentHTML(
        "beforeend",
        `

<div class="child">
<img class="img" src="${array.IMG}"><img>
<h1 class="name">${array.Name}</h1>
<h2 class="rank">${array.Type}</h2>
</div>

`
      )
    );
}
