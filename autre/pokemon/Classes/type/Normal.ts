import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Normal extends TypeAbstrait {
  constructor() {
    super(TypeEnum.NORMAL);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (typePokemonAdverse.nomType === TypeEnum.COMBAT) {
      return 2;
    } else if (typePokemonAdverse.nomType === TypeEnum.SPECTRE) {
      return 0;
    } else {
      return 1;
    }
  }
}
