// Exerice 1

/**
 *  Dit bonjour à 'prenom'
 */
function bonjour(prenom:string) :String {
    return `Bonjour ${prenom} !`;
}

console.log(bonjour("Michel"));

// Exerice 2

/**
 * Addition entre 2 nombres
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
 * Annonce le gain ou la perte de €
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

// Exerice 5

// Exerice 6

// Exerice 7

// Exerice 8
