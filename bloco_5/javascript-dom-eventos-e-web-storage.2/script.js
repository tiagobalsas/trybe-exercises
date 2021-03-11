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
  // Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
  let divLeftContent = document.createElement("div");
  divLeftContent.className = "left-content";
  elementDiv.appendChild(divLeftContent);
  // Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
  let divRightContent = document.createElement("div");
  divRightContent.className = "right-content";
  elementDiv.appendChild(divRightContent);

  // Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

  let elementImg = document.createElement("img");
  elementImg.setAttribute("src", "https://picsum.photos/200");
  elementImg.className = "small-image";
  divLeftContent.appendChild(elementImg)
  console.log(elementImg);
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
