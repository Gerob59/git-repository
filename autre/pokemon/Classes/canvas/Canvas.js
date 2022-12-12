const myCanvas = document.querySelector("canvas");
let ctx = myCanvas.getContext("2d");
let droite = 0;
let bas = 0;

const drawImage = (url) => {
  const pkm = new Image();
  pkm.src = url;
  pkm.onload = () => {
    ctx.drawImage(pkm, droite, bas, 100, 100);
    droite += 100;
  };
};

drawImage("../../Images/pikachu.jfif");
drawImage("../../Images/pikachu2.png");
