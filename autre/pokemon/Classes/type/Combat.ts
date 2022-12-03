import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Combat extends TypeAbstrait {
  constructor() {
    super(TypeEnum.COMBAT);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.VOL ||
      typePokemonAdverse.nomType === TypeEnum.PSY ||
      typePokemonAdverse.nomType === TypeEnum.FEE
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.ROCHE ||
      typePokemonAdverse.nomType === TypeEnum.INSECTE ||
      typePokemonAdverse.nomType === TypeEnum.TENEBRES
    ) {
      return 0.5;
    } else {
      return 1;
    }
  }
}
