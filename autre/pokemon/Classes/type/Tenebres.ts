import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Tenebres extends TypeAbstrait {
  constructor() {
    super(TypeEnum.TENEBRES);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.COMBAT ||
      typePokemonAdverse.nomType === TypeEnum.INSECTE ||
      typePokemonAdverse.nomType === TypeEnum.FEE
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.SPECTRE ||
      typePokemonAdverse.nomType === TypeEnum.TENEBRES
    ) {
      return 0.5;
    } else if (typePokemonAdverse.nomType === TypeEnum.PSY) {
      return 0;
    } else {
      return 1;
    }
  }
}
