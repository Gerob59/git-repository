/*
let age = 18;
const MAJEUR = 18;
if (age === MAJEUR) {
    console.log("je suis majeur");
} else if (age < MAJEUR) {
    console.log("je suis mineur");
} else {
    console.log("je suis mort");
}
*/

/* ma fonction palindrome
function palindrome(mot) {
    const motATester = mot.toLowerCase();
    let indexDebut = 0;
    let indexFin = motATester.length;
    let flag = true;
    while (indexDebut != indexFin && flag) {
        if (indexDebut+1 === indexFin) {
            console.log("idD == idF");
            flag = false;
        }
        else if (motATester[indexDebut] != motATester[indexFin-1]) {
            console.log("Ce mot n'est effectivement pas un palindrome");
            return false;
        } 
        else {
            console.log("On n'est pas encore certain que ce soit un palindrome");
            indexDebut++;
            indexFin--;
        }
    }
    console.log("Ce mot est bien un palindrome");
    return true;
}
console.log("début programme");
let motUtilisateur = "Elle";
palindrome(motUtilisateur);
console.log("fin programme");
*/

/**
 * detecte si le mot est un palindrome
 * @param {String} mot
 */
function palindrome(mot) {
  let minuscule = mot.toLowerCase();
  minuscule === minuscule.split("").reverse().join("")
    ? console.log("Y")
    : console.log("N");
}
console.log(palindrome("Kayak"));
