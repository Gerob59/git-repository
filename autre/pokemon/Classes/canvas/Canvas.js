const myCanvas = document.querySelector("canvas");
let ctx = myCanvas.getContext("2d");
let axeX = 0;
let axeY = 0;
let taille = 75;

const drawImage = (url) => {
  const pkm = new Image();
  pkm.src = url;
  pkm.onload = () => {
    ctx.drawImage(pkm, axeX, axeY, taille, taille);
    axeX += taille;
  };
};

drawImage("../../Images/pikachu.jfif");
drawImage("../../Images/pikachu2.png");
