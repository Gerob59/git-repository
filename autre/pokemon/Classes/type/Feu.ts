import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Feu extends TypeAbstrait {
  constructor() {
    super(TypeEnum.FEU);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.POISON ||
      typePokemonAdverse.nomType === TypeEnum.ACIER
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.COMBAT ||
      typePokemonAdverse.nomType === TypeEnum.INSECTE ||
      typePokemonAdverse.nomType === TypeEnum.TENEBRES
    ) {
      return 0.5;
    } else if (typePokemonAdverse.nomType === TypeEnum.DRAGON) {
      return 0;
    } else {
      return 1;
    }
  }
}
