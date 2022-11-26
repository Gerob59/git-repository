pour tout mettre en commentaire
/\* \*/ SHIFT + ALT + A

# condition

if(condition1 || condition2) {

} else if(condition3 && condition4) {

} else {

}

# boucle

nom de tableau au pluriel
pour récupéré un element avec le nom au singulier

## for classique

const animaux = ["Chien", "Chat", "Poisson", "Humain"];
for(let i =0; i < animaux.length; i++) {
console.log(animaux[i]);
}

<!-- résultat
Chien
Chat
Poisson
Humain
-->

## for in

const animaux = ["Chien", "Chat", "Poisson", "Humain"];
for(let element in animaux) {
console.log(element);
}

<!-- résultat
0
1
2
3
-->

let personne = {
nom: 'Dupont',
prenom: 'Jean',
age: '32',
pays: 'France',
};

for(let element in personne) {
console.log(element); <!-- 0 1 2 3-->
console.log(personne[element]); <!-- Dupont Jean 32 France-->
}

## for of

const animaux = ["Chien", "Chat", "Poisson", "Humain"];
for(let element of animaux) {
console.log(element);
}

<!-- résultat
Chien
Chat
Poisson
Humain
-->

let personne = {
nom: 'Dupont',
prenom: 'Jean',
age: '32',
pays: 'France',
};

for(let element of personne) {
console.log(element); <!-- Dupont Jean 32 France-->
}

## for each

const animaux = ["Chien", "Chat", "Poisson", "Humain"];
animaux.foreach((element) => console.log(element));

<!-- résultat
Chien
Chat
Poisson
Humain
-->

## while

let i = 0;
while(i < 10) {
console.log(i);
i++;
}

<!-- résultat
0 1 2 3 4 5 6 7 8 9
-->

let i = 0;
while(i > 10) {
console.log(i);
i++;
}

<!-- résultat

-->

## do while

do {
console.log(i);
i++;
} while(i < 10);

## continue

const animaux = ["Chien", "Chat", "Poisson", "Humain"];
for(let i = 0; i < animaux.length; i++) {
if(animaux[i] === "Poisson") {
continue;
}
console.log(animaux[i]);
}

<!-- résultat
Chien
Chat
Humain
-->

## break

const animaux = ["Chien", "Chat", "Poisson", "Humain"];
for(let i = 0; i < animaux.length; i++) {
if(animaux[i] === "Poisson") {
break;
}
console.log(animaux[i]);
}

<!-- résultat
Chien
Chat
-->

# fonction

function maFunction() {
<!--bloc de code a executer-->
console.log("hello world");
}
maFunction(); <!-- resultat : "Hello world"
