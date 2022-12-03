import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Insecte extends TypeAbstrait {
  constructor() {
    super(TypeEnum.INSECTE);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.VOL ||
      typePokemonAdverse.nomType === TypeEnum.ROCHE ||
      typePokemonAdverse.nomType === TypeEnum.FEU
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.COMBAT ||
      typePokemonAdverse.nomType === TypeEnum.SOL ||
      typePokemonAdverse.nomType === TypeEnum.PLANTE
    ) {
      return 0.5;
    } else {
      return 1;
    }
  }
}
