# Les bonnes manière de coder

shift + alt + f = identation automatique

## Les principes

### DRY
D : don’t
R : repeat
Y : yourself
Ne te répète pas

### KISS
K : keep
I : it
S : simple
S : stupid
garde le simple, stupide

### YAGNI
Y : You
A : Ain't
G : Gonna
N : Need
I : It
tu n'auras pas besoin de ça

### SOLID
fiable, robuste, comprehensible, flexible et maintenable
S : Single Responsibility  (une classe, une fonction ou une méthode... doit avoir une et une seule responsabilité)
O : Open/Closed (ouvert a l'extension / fermé à la modification)
L : Liskov’s Substitution (classe T parent peut être remplacée par classe G enfant, sans que cela ne casse le programme)
I : Interface Segregation (préférer plusieurs interfaces spécifiques plutôt qu'une seule interface générale)
D : Dependency Inversion (il faut dépendre des abstractions, pas des implémentations)

### Autres

#### MoSCoW
M : must have this
S : should have this if at all possible
C : could have this if it does not affect anything else,
W : won't have this time but would like in the future

#### Abstraction
SuperClass non instantiable qui regroupe des caractéristiques et traitements communs

#### Loi de Déméter
loi pour les fonctions et les méthodes avec principe, la connaissance minimale.
"Ne parlez qu'à vos amis immédiats"
ex : this.voiture.moteur.demarrer(); /!\
ex : this.voiture.demarrer(); --qui entraine-> this.moteur.demarrer();

## exemple
MARTEAU         TOURNEVIS               OUTILS (classe abstraite)
manche          manche                  manche      
marque          marque     --deviens->  marque 
couleur         couleur                 couleur
matériau        matériau                matériau
enfoncer        visser                  /      \
                                       /héritage\ 
                                      /          \
                                   MARTEAU     TOURNEVIS
                                   enfoncer    visser

## types

### number

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

nombre pour les opérations mathématiques
let age = 29;

age = age + 2; <!--- additions --->
age += 2;

age = age - 2; <!---soustractions --->
age -= 2;

age = age * 2; <!--- multiplications --->
age *= 2;

age = age / 2; <!--- divisions entiere / resultat : 14 --->

age = age % 2; <!--- modulo (reste de la divison) / resultat : 1 --->

### string

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String

let nom = "";
let prenom = "";
let nomComplet = nom + " " + prenom;
console.log()

### boolean

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean

TRUE
FALSE
&&  --> et (vrai && vrai = vrai / vrai && faux = faux / faux && faux = faux)
||  --> ou (vrai || vrai = vrai / vrai && faux = faux / faux && faux = faux)

### Comparaison

=   --> assignation
==  --> comparaison entre 2 valeurs 
=== --> comparaison stricte (valeur et type)
!=  --> difference entre 2 valeurs 
!== --> difference stricte (valeur et type)
<   --> plus petit
\>  --> plus grand
<=  --> plus petit ou egale
\>= --> plus grand ou egale 
!   --> not (!True === false)

## commentaire

### mauvais façon

/* ceci est un mauvais commentaire <!-- code mort -->
let age = 30;
++age;
console.log(age);
*/

### bonne façon

//ceci est un bon commentaire
let age = 30; //mon age
++age;
console.log(age);

/**[enter] --> génère toute la doc

/* commentaire
* sur plusieurs
*/ ligne

let maVariable /* Un commentaire inséré */ = 'une valeur';
console.log(maVariable); //Affiche 'une valeur'

## tableau

une variable qui contient une liste d'élément.

let tableau = ["Chien", "Chat", "Oiseau", "Lapin"];
tableau[2] === "Oiseau";

*tableau.push("Poulet");* <!-- ["Chien", "Chat", "Oiseau", "Lapin", "Poulet"] -->

*tableau.unshift("KFC");* <!-- ["KFC", "Chien", "Chat", "Oiseau", "Lapin", "Poulet"] -->

*tableau.shift();* <!-- ["Chien", "Chat", "Oiseau", "Lapin", "Poulet"] -->

*tableau.pop();* <!-- ["Chien", "Chat", "Oiseau", "Lapin"] -->

let maVariable = "Toto";
let monTableau = [10, "Tata", True, maVariable];

*monTableau.length;* <!-- resultat 4 -->

*monTableau.splice(index du premier elem, nb elem à suppr);*

monTableau.splice(0, 1, 'Truc'); <!-- ['Truc', True, maVariable]; -->

*monTableau.join(' ');* <!-- Truc True maVariable -->

let tab = [10, "titi", [15, "tata"], "tutu"] 
*tab.flat();* <!-- [10, "titi", 15, "tata", "tutu"] -->

## clef

let monObjet = {
   nom: 'semifir',
   age: 4,
   ready: true
};
monObjet.age = 5; <!-- age === 5 -->

## autre

isNaN(); <!-- renvoie True pour savoir si ce n'est pas un nombre -->
typeofvariable <!-- donne le type de la variable -->

## scope

let variable = "titi";
{
   let variable = "tata";
   console.log(variable); <!-- "tata"
}
console.log(variable);
<!-- "titi" -->