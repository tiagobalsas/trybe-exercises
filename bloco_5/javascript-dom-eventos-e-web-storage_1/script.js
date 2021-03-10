let messege =
  "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing.";
function modifyText(msg) {
  let elementP = document.getElementsByTagName("p");
  elementP[0].innerHTML = msg;
  console.log(elementP[1]);
}

modifyText(messege);
