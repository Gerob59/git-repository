let nb1 = 0.2;
let nb2 = 0.1;
console.log(nb1 + nb2); // = 0.30000000000000004
console.log((nb1*100 + nb2*100)/100); // = 0.3
//tout mettre en centimes pour calculer, puis repasser en € au moment de la mise en page.

console.log(1e3); // 1 * 10 puissance 3 === 1000
console.log(2 ** 3); // 2 puissance 3 === 8
console.log(parseFloat("1e7")); // 1 * 10 puissance 7 === 10000000
console.log((10000).toExponential()); // 1e+4
console.log((12345).toExponential()); // 1.2345e+4
console.log((12345).toExponential(2)); // 1.23e+4
console.log(Math.random()); // 0 < random < 0.999...
console.log(Math.random()*10); // 0 < random < 9.999...
console.log('l\'algo c\'est la vie'); // l'algo c'est la vie
console.log(`l'algo c'est la vie`); // l'algo c'est la vie

let age = 30;
console.log(`l'algo ${age} c'est la vie`); // l'algo c'est la vie
console.log(`${age > 30 ? "vive l'algo," : "Au secour de l'algo,"} c'est la vie`); // Au secour de l'algo, c'est la vie

let prenom = "Corentin";
console.log(prenom[3]); // [C][o][r][e][n][t][i][n] --> e

let heure = 8;
let phrase = "j'ai faim";
console.log(`J'ai ${heure > 12 ? "faim" : "soif"}`); // avant 12h == "j'ai soif"
                                                     // après 12h == "j'ai faim"

const chien = {
    race: "caniche",
    nbPatte: 6,
    courir: function(){
        return `Mon chien est un ${this.race} à ${this.nbPatte} pattes et sait courir après un os`;
    },
};
console.log(chien.courir()); // Mon chien est un caniche à 6 pattes et sait courir après un os

// Fonction classique
function addition(num1, num2) {
    return num1 + num2;
}

// Fonction fléchée
const addition = (num1, num2) => {
    return num1 + num2;
}
const addition = (num1, num2) => num1 + num2;

const id = id1 => id1;
