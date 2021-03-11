function creatTitle(msg) {
  let elementTitle = document.querySelector("body");
  let creatElementH = document.createElement("h1");
  creatElementH.innerHTML = msg;
  elementTitle.appendChild(creatElementH);
}
let msg = "Exercício 5.2 - JavaScript DOM";
creatTitle(msg);

function creatDiv() {
  let elementBody = document.querySelector("body");
  let elementDiv = document.createElement("div");
  elementDiv.className = "main-content";
  elementBody.appendChild(elementDiv);
}
creatDiv();

function divChild() {
  let elementDiv = document.querySelector(".main-content");
  let elementDivChild = document.createElement("div");
  elementDivChild.className = "center-content";
  elementDiv.appendChild(elementDivChild);
}
divChild();

function addChildP() {
  let elementDivChild = document.querySelector(".center-content");
  let elementP = document.createElement("p");
  elementP.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, in.";
  elementDivChild.appendChild(elementP);
}

addChildP();
