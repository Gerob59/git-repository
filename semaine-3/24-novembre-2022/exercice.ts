// Exerice 1

/**
 *  Fonction qui dit bonjour à 'prenom'
 */
function bonjour(prenom:string) :string {
    return `Bonjour ${prenom} !`;
}

console.log(bonjour("Michel"));

// Exerice 2

/**
 * Fonction qui addition entre 2 nombres
 * @param nombre1 
 * @param nombre2 
 * @returns nombre1 + nombre2
 */
function calcul(nombre1:number,nombre2:number) :number {
    return nombre1+nombre2;
}
console.log(calcul(3,5));

// Exerice 3

/**
 * Fonction qui annonce le gain ou la perte en €
 * @param coutFabrication 
 * @param prixVente 
 * @returns difference entre coutFabrication et prixVente
 */
function gain(coutFabrication:number,prixVente:number) :string {
    if (coutFabrication >= prixVente) {
        return `Perte de ${coutFabrication - prixVente}€`
    } else {
        return `Gain de ${prixVente - coutFabrication}€`
    }
}
console.log(gain(15,15));

// Exerice 4

/**
 * Fonction qui sert a savoir le plus grand entre 3 nombres
 * @param nombre1 
 * @param nombre2 
 * @param nombre3 
 * @returns Le plus grand
 */
function plusGrand(nombre1:number, nombre2:number, nombre3:number) :number {
    if (nombre1 >= nombre2 && nombre1 >= nombre3) {
        return nombre1;
    } else if (nombre2 >= nombre3) {
        return nombre2
    } else {
        return nombre3;
    }
}
console.log(plusGrand(2,4,3));

// Exerice 5

/**
 * la fonction recoit une liste de nombre
 * @param nombres 
 * @returns le plus grand
 */
function plusGrandTab(...nombres:number[]) :number {
    let plusGrand:number = nombres[0];
    for (let index = 1; index < nombres.length; index++) {
        if (nombres[index] > plusGrand) {
            plusGrand = nombres[index];
        }
    }
    return plusGrand;
}
console.log(plusGrandTab(12,5,3,14,14));

// Exerice 6

/**
 * 
 * @param prenom prenom de l'élève
 * @param notes utilise la fonction 'moyenne(notes:number[])' pour avoir la moyenne le l'élève
 * @returns prenom + moyenne + appreciation
 */
function lazy(prenom:string, ...notes:number[]) :string {
    const moy:number = moyenne(notes);
    return `${prenom} : ${moy}, ${appreciation(moy)}`;
}

/**
 * Fait la moyenne de toutes les notes
 * @param notes 
 * @returns moyenne
 */
function moyenne(notes:number[]) :number {
    let moyenne:number = notes [0];
    for (let index = 1; index < notes.length; index++) {
        moyenne += notes[index];
    }
    return moyenne/notes.length;
}

/**
 * Donne l'appréciation par rapport a la moyenne de l'élève
 * @param moyenne 
 * @returns appreciation
 */
function appreciation(moyenne:number) :string {
    let result:string = "";
     if (moyenne > 20 || moyenne < 0) {
        result = "Note non valide";
    } else if (moyenne >= 19) {
        result = "Très bien"
    } else if (moyenne >= 15) {
        result = "Bien"
    } else if (moyenne >= 11) {
        result = "Passable"
    } else if (moyenne >= 5) {
        result = "Insuffisant"
    } else {
        result = "Catastrophique"
    }
    return result;
}

console.log(lazy("Corine de la Compta",12,15,10));

// Exerice 7

/**
 * permet le calcul entre 2 nombre avec uniquement les operateurs : '+' '-' '*' '/'
 * @param nombre1 
 * @param nombre2 
 * @param operateur 
 * @returns calcl nombre 1 et nombre 2 selon operator 
 */
function operation(nombre1:number, nombre2:number, operateur:string) :number {
    let result:number = 0;
    if (operateur === "+") {
        result = nombre1 + nombre2;
    } else if (operateur === "-") {
        result = nombre1 - nombre2;
    } else if ( operateur === "*" ) {
        result = nombre1 * nombre2;
    } else if (operateur === "/") {
        result = nombre1 / nombre2;
    } else {
        result = 0;
    }
    return result;
}

// Exerice 8
