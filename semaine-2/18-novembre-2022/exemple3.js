// On recupere les donnees element du formulaire
let form = document.forms[0].elements;
// Creation d'une variable vide pour contenir l'objet
let user = {};
// On selectionne notre differente div qui recevra notre resultat
let divResult = document.querySelector("#result");
// On recuperer le bouton submit
let submit = document.querySelector("#submit");
// On empeche le bouton de refresh la page
submit.addEventListener("click", (event) => {
  event.preventDefault();
  // On recupere d'abord les mots de passe
  let password = form["password"].value;
  let password2 = form["password2"].value;
  // On crée une methode qui affiche mon user si le mot de passe concorde
  if (checkPassword(password, password2)) {
    user.nom = form["nom"].value;
    user.prenom = form["prenom"].value;
    user.email = form["email"].value;
    user.password = form["password"].value;
    divResult.innerText = JSON.stringify(user);
  } else {
    form["password"].value = "";
    form["password2"].value = "";
    alert("les mots de passe ne correspondent pas !");
  }
});
function checkPassword(password, password2) {
  if (password !== password2 || password === "") {
    return false;
  } else {
    return true;
  }
}
