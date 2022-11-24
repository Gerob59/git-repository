// Exerice 1

/**
 *  Fonction qui dit bonjour à 'prenom'
 */
function bonjour(prenom:string) :String {
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
function calcul(nombre1:number,nombre2:number) :Number {
    return nombre1+nombre2;
}
console.log(calcul(3,5));

// Exerice 3

/**
 * Fonction qui annonce le gain ou la perte de €
 * @param coutFabrication 
 * @param prixVente 
 * @returns difference entre coutFabrication et prixVente
 */
function gain(coutFabrication:number,prixVente:number) :String {
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
function plusGrand(nombre1:number, nombre2:number, nombre3:number) :Number {
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

// Exerice 6

// Exerice 7

// Exerice 8
