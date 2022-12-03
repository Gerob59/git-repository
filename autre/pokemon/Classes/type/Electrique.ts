import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Electrique extends TypeAbstrait {
  constructor() {
    super(TypeEnum.ELECTRIQUE);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (typePokemonAdverse.nomType === TypeEnum.SOL) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.VOL ||
      typePokemonAdverse.nomType === TypeEnum.ACIER ||
      typePokemonAdverse.nomType === TypeEnum.ELECTRIQUE
    ) {
      return 0.5;
    } else {
      return 1;
    }
  }
}
