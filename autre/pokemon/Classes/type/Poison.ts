import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Poison extends TypeAbstrait {
  constructor() {
    super(TypeEnum.POISON);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.SOL ||
      typePokemonAdverse.nomType === TypeEnum.PSY
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.COMBAT ||
      typePokemonAdverse.nomType === TypeEnum.POISON ||
      typePokemonAdverse.nomType === TypeEnum.INSECTE ||
      typePokemonAdverse.nomType === TypeEnum.PLANTE ||
      typePokemonAdverse.nomType === TypeEnum.FEE
    ) {
      return 0.5;
    } else {
      return 1;
    }
  }
}
