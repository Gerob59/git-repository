import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Sol extends TypeAbstrait {
  constructor() {
    super(TypeEnum.SOL);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.EAU ||
      typePokemonAdverse.nomType === TypeEnum.PLANTE ||
      typePokemonAdverse.nomType === TypeEnum.GLACE
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.POISON ||
      typePokemonAdverse.nomType === TypeEnum.ROCHE
    ) {
      return 0.5;
    } else if (typePokemonAdverse.nomType === TypeEnum.ELECTRIQUE) {
      return 0;
    } else {
      return 1;
    }
  }
}
