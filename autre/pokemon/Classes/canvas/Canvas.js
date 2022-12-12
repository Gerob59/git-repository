const myCanvas = document.querySelector("canvas");
let ctx = myCanvas.getContext("2d");
let droite = 0;
let bas = 0;

const drawImage = (url) => {
  const pkm = new Image();
  pkm.src = url;
  pkm.onload = () => {
    ctx.drawImage(pkm, droite, bas, 75, 75);
    droite += 75;
  };
};

drawImage("../../Images/pikachu.jfif");
drawImage("../../Images/pikachu2.png");
