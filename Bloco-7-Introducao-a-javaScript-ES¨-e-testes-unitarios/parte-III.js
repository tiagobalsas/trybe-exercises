const botao = document.querySelector("#clickButton");
let clickCount = 0;
botao.addEventListener("click", () => {
  const box = document.querySelector("#contagem");
  box.innerHTML = clickCount += 1;
});
