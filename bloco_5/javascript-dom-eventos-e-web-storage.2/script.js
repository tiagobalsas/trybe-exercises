function creatTitle(msg) {
  let elementTitle = document.querySelector("body");
  let creatElementH = document.createElement("h1");
  creatElementH.innerHTML = msg;
  // Adicione a classe title na tag h1 criada
  creatElementH.className = "title";
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
  divLeftContent.appendChild(elementImg);
  // Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div

  divRightContent.style.marginRight = "auto";

  // Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

  let numbers = [
    "Um",
    "Dois",
    "Tres",
    "Quatro",
    "Cinco",
    "Seis",
    "Sete",
    "Oito",
    "Nove",
    "Dez",
  ];
  let elementUl = document.createElement("ul");
  for (let index = 0; index < numbers.length; index++) {
    const creatList = numbers[index];
    let list = document.createElement("li");
    list.className = "list";
    list.innerHTML = creatList;
    elementUl.appendChild(list);
  }

  divRightContent.appendChild(elementUl);

  // let removeItem = document.querySelector('.elementUl')

  // Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

  for (let indice = 0; indice < 3; indice += 1) {
    let elementHTres = document.createElement("h3");
    elementHTres.innerHTML = "Elemento h3";
    // Adicione a classe description nas 3 tags h3 criadas
    elementHTres.className = "description";
    elementDiv.appendChild(elementHTres);
  }
  // // Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
  // let removeElementsList = document.querySelector(".list");
  // for (let index = 0; index < removeElementsList.length; index++) {
  //   const element = removeElementsList[index];

  //   if (element.innerText.includes("nove")) {
  //     removeElementsList.remove(element);
  //   }
  // }
}
creatDiv();

function divChild() {
  let elementDiv = document.querySelector(".main-content");
  let elementDivChild = document.createElement("div");
  elementDivChild.className = "center-content";
  elementDiv.appendChild(elementDivChild);

  // Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde
  elementDiv.style.backgroundColor = "green";
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

// Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild()
let leftContent = document.querySelector(".left-content");
let mainClass = document.querySelector(".main-content");
mainClass.appendChild(leftContent).remove();
