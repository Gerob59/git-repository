//fonction qui évalue le chiffre et renvoie la sortie
function calculer() {
  let screen = document.getElementById("output").value;
  let applicate = eval(screen);
  document.getElementById("output").value = applicate;
}
//fonction qui affiche la valeur
function afficher(resultat) {
  document.getElementById("output").value += resultat;
}
//fonction qui efface l'écran
function effacer() {
  document.getElementById("output").value = "";
}
