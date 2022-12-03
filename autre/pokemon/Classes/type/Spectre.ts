import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Spectre extends TypeAbstrait {
  constructor() {
    super(TypeEnum.SPECTRE);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.SPECTRE ||
      typePokemonAdverse.nomType === TypeEnum.TENEBRES
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.POISON ||
      typePokemonAdverse.nomType === TypeEnum.INSECTE
    ) {
      return 0.5;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.NORMAL ||
      typePokemonAdverse.nomType === TypeEnum.COMBAT
    ) {
      return 0;
    } else {
      return 1;
    }
  }
}
