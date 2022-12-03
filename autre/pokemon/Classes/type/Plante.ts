import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Plante extends TypeAbstrait {
  constructor() {
    super(TypeEnum.PLANTE);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.VOL ||
      typePokemonAdverse.nomType === TypeEnum.POISON ||
      typePokemonAdverse.nomType === TypeEnum.INSECTE ||
      typePokemonAdverse.nomType === TypeEnum.FEU ||
      typePokemonAdverse.nomType === TypeEnum.GLACE
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.SOL ||
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
