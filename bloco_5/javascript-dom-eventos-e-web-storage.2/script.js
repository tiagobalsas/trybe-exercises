function creatTitle(msg) {
  let elementTitle = document.querySelector("body");
  let creatElementH = document.createElement("h1");
  creatElementH.innerHTML = msg;
  elementTitle.appendChild(creatElementH);
}
let msg = "Exercício 5.2 - JavaScript DOM";
creatTitle(msg);

function creatDiv (){
  let elementBody = document.querySelector('body')
  let elementDiv = document.createElement('div')
  elementDiv.className = "main-content";
  elementBody.appendChild(elementDiv)
}
creatDiv()
