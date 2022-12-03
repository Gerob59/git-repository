import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Eau extends TypeAbstrait {
  constructor() {
    super(TypeEnum.EAU);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.PLANTE ||
      typePokemonAdverse.nomType === TypeEnum.ELECTRIQUE
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.ACIER ||
      typePokemonAdverse.nomType === TypeEnum.FEU ||
      typePokemonAdverse.nomType === TypeEnum.EAU ||
      typePokemonAdverse.nomType === TypeEnum.GLACE
    ) {
      return 0.5;
    } else {
      return 1;
    }
  }
}
