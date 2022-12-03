import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Acier extends TypeAbstrait {
  constructor() {
    super(TypeEnum.ACIER);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.COMBAT ||
      typePokemonAdverse.nomType === TypeEnum.SOL ||
      typePokemonAdverse.nomType === TypeEnum.FEE
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.NORMAL ||
      typePokemonAdverse.nomType === TypeEnum.VOL ||
      typePokemonAdverse.nomType === TypeEnum.ROCHE ||
      typePokemonAdverse.nomType === TypeEnum.INSECTE ||
      typePokemonAdverse.nomType === TypeEnum.ACIER ||
      typePokemonAdverse.nomType === TypeEnum.PLANTE ||
      typePokemonAdverse.nomType === TypeEnum.PSY ||
      typePokemonAdverse.nomType === TypeEnum.GLACE ||
      typePokemonAdverse.nomType === TypeEnum.DRAGON ||
      typePokemonAdverse.nomType === TypeEnum.FEE
    ) {
      return 0.5;
    } else if (typePokemonAdverse.nomType === TypeEnum.POISON) {
      return 0;
    } else {
      return 1;
    }
  }
}
