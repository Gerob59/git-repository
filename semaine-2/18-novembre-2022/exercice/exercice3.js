function fizzBuzz(nombreRecu) {
  let resultat = "";
  if (nombreRecu % 15 === 0) {
    resultat = "FizzBuzz";
  } else if (nombreRecu % 3 === 0) {
    resultat = "Fizz";
  } else if (nombreRecu % 5 === 0) {
    resultat = "Buzz";
  } else {
    resultat = "raté";
  }
  return resultat;
}

function fullFizzBuzz(taille) {
  let tmp = "";
  for (let index = 1; index < taille + 1; index++) {
    tmp += `${index} : ${fizzBuzz(index)} \n`;
  }
  return (p3.innerText = tmp);
}

const body3 = document.querySelector("body");
let p3 = document.createElement("p");
body3.append(p3);
fullFizzBuzz(100);
