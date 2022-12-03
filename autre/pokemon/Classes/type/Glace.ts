import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Glace extends TypeAbstrait {
  constructor() {
    super(TypeEnum.GLACE);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.COMBAT ||
      typePokemonAdverse.nomType === TypeEnum.ROCHE ||
      typePokemonAdverse.nomType === TypeEnum.ACIER ||
      typePokemonAdverse.nomType === TypeEnum.FEU
    ) {
      return 2;
    } else if (typePokemonAdverse.nomType === TypeEnum.GLACE) {
      return 0.5;
    } else {
      return 1;
    }
  }
}
