import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Vol extends TypeAbstrait {
  constructor() {
    super(TypeEnum.VOL);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    if (
      typePokemonAdverse.nomType === TypeEnum.ROCHE ||
      typePokemonAdverse.nomType === TypeEnum.ELECTRIQUE ||
      typePokemonAdverse.nomType === TypeEnum.GLACE
    ) {
      return 2;
    } else if (
      typePokemonAdverse.nomType === TypeEnum.COMBAT ||
      typePokemonAdverse.nomType === TypeEnum.INSECTE ||
      typePokemonAdverse.nomType === TypeEnum.PLANTE
    ) {
      return 0.5;
    } else if (typePokemonAdverse.nomType === TypeEnum.SOL) {
      return 0;
    } else {
      return 1;
    }
  }
}
