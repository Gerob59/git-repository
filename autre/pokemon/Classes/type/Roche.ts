import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Roche extends TypeAbstrait {
  constructor() {
    super(TypeEnum.ROCHE);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.COMBAT ||
      typePokemonAdverse.nomType === TypeEnum.SOL ||
      typePokemonAdverse.nomType === TypeEnum.ACIER ||
      typePokemonAdverse.nomType === TypeEnum.EAU ||
      typePokemonAdverse.nomType === TypeEnum.PLANTE
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.NORMAL ||
      typePokemonAdverse.nomType === TypeEnum.VOL ||
      typePokemonAdverse.nomType === TypeEnum.POISON ||
      typePokemonAdverse.nomType === TypeEnum.FEU
    ) {
      return 0.5;
    } else {
      return 1;
    }
  }
}
