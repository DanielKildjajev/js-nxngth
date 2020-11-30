// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app"); // Select getElementByIdwith id "app"

function reqListener() {
  appDiv.innerHTML = JSON.parse(this.responseText).extract_html;

  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open(
  "GET",
  "https://en.wikipedia.org/api/rest_v1/page/summary/Viljandi_County"
);
oReq.send();
