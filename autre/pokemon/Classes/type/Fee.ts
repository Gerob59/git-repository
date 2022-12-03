import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Fee extends TypeAbstrait {
  constructor() {
    super(TypeEnum.FEE);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.SOL ||
      typePokemonAdverse.nomType === TypeEnum.ROCHE ||
      typePokemonAdverse.nomType === TypeEnum.EAU
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.INSECTE ||
      typePokemonAdverse.nomType === TypeEnum.ACIER ||
      typePokemonAdverse.nomType === TypeEnum.FEU ||
      typePokemonAdverse.nomType === TypeEnum.PLANTE ||
      typePokemonAdverse.nomType === TypeEnum.GLACE ||
      typePokemonAdverse.nomType === TypeEnum.FEE
    ) {
      return 0.5;
    } else {
      return 1;
    }
  }
}
