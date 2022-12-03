/**
 * Liste de tous les types qui existe dans le jeu
 */
enum Type {
  ACIER = "Acier",
  COMBAT = "Combat",
  DRAGON = "Dragon",
  EAU = "Eau",
  ELECTRIQUE = "Electrique",
  FEU = "Feu",
  FEE = "Fee",
  GLACE = "Glace",
  INSECTE = "Insecte",
  NORMAL = "Normal",
  PLANTE = "Plante",
  POISON = "Poison",
  PSY = "Psy",
  ROCHE = "Roche",
  SOL = "Sol",
  SPECTRE = "Spectre",
  TENEBRES = "Tenebres",
  VOL = "Vol",
}
export default Type;

/**
 * Permet de savoir le multiplicateur de degats d'une attaque sur un pokemon
 * @param typePokemon le type du pokemon qui recoit l'attaque
 * @param typeAttaqueRecu le type de l'attaque que le pokemon recoit
 * @returns multiplicateur de degats selon les types
 */
function tableType(typePokemon: Type, typeAttaqueRecu: Type): number {
  if (typePokemon === Type.ACIER) {
    if (
      typeAttaqueRecu === Type.COMBAT ||
      typeAttaqueRecu === Type.SOL ||
      typeAttaqueRecu === Type.FEU
    ) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.NORMAL ||
      typeAttaqueRecu === Type.VOL ||
      typeAttaqueRecu === Type.ROCHE ||
      typeAttaqueRecu === Type.INSECTE ||
      typeAttaqueRecu === Type.ACIER ||
      typeAttaqueRecu === Type.PLANTE ||
      typeAttaqueRecu === Type.PSY ||
      typeAttaqueRecu === Type.GLACE ||
      typeAttaqueRecu === Type.DRAGON ||
      typeAttaqueRecu === Type.FEE
    ) {
      return 0.5;
    } else if (typeAttaqueRecu === Type.POISON) {
      return 0;
    }
  } else if (typePokemon === Type.COMBAT) {
    if (
      typeAttaqueRecu === Type.VOL ||
      typeAttaqueRecu === Type.PSY ||
      typeAttaqueRecu === Type.FEE
    ) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.ROCHE ||
      typeAttaqueRecu === Type.INSECTE ||
      typeAttaqueRecu === Type.TENEBRES
    ) {
      return 0.5;
    }
  } else if (typePokemon === Type.DRAGON) {
    if (
      typeAttaqueRecu === Type.GLACE ||
      typeAttaqueRecu === Type.DRAGON ||
      typeAttaqueRecu === Type.FEE
    ) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.FEU ||
      typeAttaqueRecu === Type.EAU ||
      typeAttaqueRecu === Type.PLANTE ||
      typeAttaqueRecu === Type.ELECTRIQUE
    ) {
      return 0.5;
    }
  } else if (typePokemon === Type.EAU) {
    if (
      typeAttaqueRecu === Type.PLANTE ||
      typeAttaqueRecu === Type.ELECTRIQUE
    ) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.ACIER ||
      typeAttaqueRecu === Type.FEU ||
      typeAttaqueRecu === Type.EAU ||
      typeAttaqueRecu === Type.GLACE
    ) {
      return 0.5;
    }
  } else if (typePokemon === Type.ELECTRIQUE) {
    if (typeAttaqueRecu === Type.SOL) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.VOL ||
      typeAttaqueRecu === Type.ACIER ||
      typeAttaqueRecu === Type.ELECTRIQUE
    ) {
      return 0.5;
    }
  } else if (typePokemon === Type.FEU) {
    if (
      typeAttaqueRecu === Type.SOL ||
      typeAttaqueRecu === Type.ROCHE ||
      typeAttaqueRecu === Type.EAU
    ) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.INSECTE ||
      typeAttaqueRecu === Type.ACIER ||
      typeAttaqueRecu === Type.FEU ||
      typeAttaqueRecu === Type.PLANTE ||
      typeAttaqueRecu === Type.GLACE ||
      typeAttaqueRecu === Type.FEE
    ) {
      return 0.5;
    }
  } else if (typePokemon === Type.FEE) {
    if (typeAttaqueRecu === Type.POISON || typeAttaqueRecu === Type.ACIER) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.COMBAT ||
      typeAttaqueRecu === Type.INSECTE ||
      typeAttaqueRecu === Type.TENEBRES
    ) {
      return 0.5;
    } else if (typeAttaqueRecu === Type.DRAGON) {
      return 0;
    }
  } else if (typePokemon === Type.GLACE) {
    if (
      typeAttaqueRecu === Type.COMBAT ||
      typeAttaqueRecu === Type.ROCHE ||
      typeAttaqueRecu === Type.ACIER ||
      typeAttaqueRecu === Type.FEU
    ) {
      return 2;
    } else if (typeAttaqueRecu === Type.GLACE) {
      return 0.5;
    }
  } else if (typePokemon === Type.INSECTE) {
    if (
      typeAttaqueRecu === Type.VOL ||
      typeAttaqueRecu === Type.ROCHE ||
      typeAttaqueRecu === Type.FEU
    ) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.COMBAT ||
      typeAttaqueRecu === Type.SOL ||
      typeAttaqueRecu === Type.PLANTE
    ) {
      return 0.5;
    }
  } else if (typePokemon === Type.NORMAL) {
    if (typeAttaqueRecu === Type.COMBAT) {
      return 2;
    } else if (typeAttaqueRecu === Type.SPECTRE) {
      return 0;
    }
  } else if (typePokemon === Type.PLANTE) {
    if (
      typeAttaqueRecu === Type.VOL ||
      typeAttaqueRecu === Type.POISON ||
      typeAttaqueRecu === Type.INSECTE ||
      typeAttaqueRecu === Type.FEU ||
      typeAttaqueRecu === Type.GLACE
    ) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.SOL ||
      typeAttaqueRecu === Type.EAU ||
      typeAttaqueRecu === Type.PLANTE ||
      typeAttaqueRecu === Type.ELECTRIQUE
    ) {
      return 0.5;
    }
  } else if (typePokemon === Type.POISON) {
    if (typeAttaqueRecu === Type.SOL || typeAttaqueRecu === Type.PSY) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.COMBAT ||
      typeAttaqueRecu === Type.POISON ||
      typeAttaqueRecu === Type.INSECTE ||
      typeAttaqueRecu === Type.PLANTE ||
      typeAttaqueRecu === Type.FEE
    ) {
      return 0.5;
    }
  } else if (typePokemon === Type.PSY) {
    if (
      typeAttaqueRecu === Type.INSECTE ||
      typeAttaqueRecu === Type.SPECTRE ||
      typeAttaqueRecu === Type.TENEBRES
    ) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.COMBAT ||
      typeAttaqueRecu === Type.PSY
    ) {
      return 0.5;
    }
  } else if (typePokemon === Type.ROCHE) {
    if (
      typeAttaqueRecu === Type.COMBAT ||
      typeAttaqueRecu === Type.SOL ||
      typeAttaqueRecu === Type.ACIER ||
      typeAttaqueRecu === Type.EAU ||
      typeAttaqueRecu === Type.PLANTE
    ) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.NORMAL ||
      typeAttaqueRecu === Type.VOL ||
      typeAttaqueRecu === Type.POISON ||
      typeAttaqueRecu === Type.FEU
    ) {
      return 0.5;
    }
  } else if (typePokemon === Type.SOL) {
    if (
      typeAttaqueRecu === Type.EAU ||
      typeAttaqueRecu === Type.PLANTE ||
      typeAttaqueRecu === Type.GLACE
    ) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.POISON ||
      typeAttaqueRecu === Type.ROCHE
    ) {
      return 0.5;
    } else if (typeAttaqueRecu === Type.ELECTRIQUE) {
      return 0;
    }
  } else if (typePokemon === Type.SPECTRE) {
    if (typeAttaqueRecu === Type.SPECTRE || typeAttaqueRecu === Type.TENEBRES) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.POISON ||
      typeAttaqueRecu === Type.INSECTE
    ) {
      return 0.5;
    } else if (
      typeAttaqueRecu === Type.NORMAL ||
      typeAttaqueRecu === Type.COMBAT
    ) {
      return 0;
    }
  } else if (typePokemon === Type.TENEBRES) {
    if (
      typeAttaqueRecu === Type.COMBAT ||
      typeAttaqueRecu === Type.INSECTE ||
      typeAttaqueRecu === Type.FEE
    ) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.SPECTRE ||
      typeAttaqueRecu === Type.TENEBRES
    ) {
      return 0.5;
    } else if (typeAttaqueRecu === Type.PSY) {
      return 0;
    }
  } else if (typePokemon === Type.VOL) {
    if (
      typeAttaqueRecu === Type.ROCHE ||
      typeAttaqueRecu === Type.ELECTRIQUE ||
      typeAttaqueRecu === Type.GLACE
    ) {
      return 2;
    } else if (
      typeAttaqueRecu === Type.COMBAT ||
      typeAttaqueRecu === Type.INSECTE ||
      typeAttaqueRecu === Type.PLANTE
    ) {
      return 0.5;
    } else if (typeAttaqueRecu === Type.SOL) {
      return 0;
    }
  }
  return 1;
}
