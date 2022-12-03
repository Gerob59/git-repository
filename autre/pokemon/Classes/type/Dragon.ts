import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Dragon extends TypeAbstrait {
  constructor() {
    super(TypeEnum.DRAGON);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.GLACE ||
      typePokemonAdverse.nomType === TypeEnum.DRAGON ||
      typePokemonAdverse.nomType === TypeEnum.FEE
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.FEU ||
      typePokemonAdverse.nomType === TypeEnum.EAU ||
      typePokemonAdverse.nomType === TypeEnum.PLANTE ||
      typePokemonAdverse.nomType === TypeEnum.ELECTRIQUE
    ) {
      return 0.5;
    } else {
      return 1;
    }
  }
}
