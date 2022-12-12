const myCanvas = document.querySelector("canvas");
let ctx = myCanvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
let pkm;
make_base();

function make_base() {
  pkm = new Image();
  pkm.src = "../../Images/pikachu2.png";
  pkm.onload = function () {
    context.drawImage(pkm, 0, 0, 100, 100);
  };
}
