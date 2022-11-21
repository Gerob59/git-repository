function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomText() {
  const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&é"'(-_)=/*-+123456789?./§!:;,$*^ù£µ¨<%>²&~#{[|\`^@]}\\`;
  let text = "";
  for (let index = 0; index < 12; index++) {
    text += letters[Math.floor(Math.random() * letters.length)];
  }
  return text;
}

function randomBinary() {
  const letters = "01";
  let text = "";
  for (let index = 0; index < 100; index++) {
    text += letters[Math.floor(Math.random() * letters.length)];
  }
  return text;
}

// change le premier element
// function randomElement(element) {
//   const myElem = document.querySelector(element);
//   myElem.style.color = getRandomColor();
//   myElem.style.fontSize = Math.floor(1 + Math.random() * 9) + "em";
// }
// const interval = setInterval(randomElement, 1000, "p");

// change tous les elements
function randomElements(element) {
  const myElem = document.querySelectorAll(element);
  myElem.forEach((elem) => {
    elem.style.color = getRandomColor();
    elem.style.fontSize = Math.floor(1 + Math.random() * 8) + "em";
    elem.innerText = randomBinary();
  });
}
setInterval(randomElements, 1000, "p");
