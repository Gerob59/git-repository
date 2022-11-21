/* First method
let nom = prompt("quel est votre nom ?");
console.log(`Bienvenue ${nom}`);
*/

/* Second method
function nom(nom) {
    return console.log(`Bienvenue ${nom}`);
}
nom("Lamia");
nom("Miloud");
*/

/* what can we do
console.log("hello world");
String: "Une chaine de caractere"
Number: 5
Boolean: true | false
undefined: 
null
tableau:[25, "France", [23, "Italie"], {nom: "Luigi"}]
objet: {
    nom: "Menez";
    prenom: "Luigi"
}
*/

/* addition
let nombre1 = 28;
let nombre2 = 31;
let nombre3 = nombre1 + nombre2;
console.log(nombre3);
*/

/* concatenation
let nombre1 = "Menez";
let nombre2 = "Luigi";
console.log(nombre1 + " " + nombre2);
let nombre3 = `${nombre1} ${nombre2}`;
console.log(nombre3);
*/

/* enter one number
let nombre1 = prompt("quel est le nombre ?");
let nombre2 = 52;
let nombre3 = `${nombre1} ${nombre2}`;
console.log(nombre3);
*/

/* enter 2 numbers to calculate
let nombre1 = new Number(prompt("quel est le premier nombre ?"));
let nombre2 = new Number(prompt("quel est le deuxieme nombre ?"));
let nombre3 = nombre1 + nombre2;
console.log(`${nombre1} + ${nombre2} = ${nombre3}`);
*/

/* Recursif enter numbers to calculate
let calculString = "";
let resultat = 0;

function getNumber() {
    let nombreChoisi = parseInt(prompt("Quel est le nombre ?"));
    if (nombreChoisi == 0) {
     calculString += ` 0 = ${resultat}`;
     return calculString;
    }
    calculString += ` ${nombreChoisi} +`;
    resultat += nombreChoisi;
    getNumber();
}

getNumber();
console.log(calculString);
*/
/*
function traiter(phrase) {
    let resultat = 0;
    do {
        
    } while (condition);
}

function isCalculator(caractere) {
    if (element == '+' | element == '-' | element == '*' | element == '/') {
        return true;
    } else {
        return false;
    }
}

let aTraiter = prompt("quel est votre calcul ?")
traiter(aTraiter);
*/
