import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Psy extends TypeAbstrait {
  constructor() {
    super(TypeEnum.PSY);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.INSECTE ||
      typePokemonAdverse.nomType === TypeEnum.SPECTRE ||
      typePokemonAdverse.nomType === TypeEnum.TENEBRES
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.COMBAT ||
      typePokemonAdverse.nomType === TypeEnum.PSY
    ) {
      return 0.5;
    } else {
      return 1;
    }
  }
}
