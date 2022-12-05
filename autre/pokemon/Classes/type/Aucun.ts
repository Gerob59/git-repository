import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import TypeAbstrait from "./TypeAbstrait";

export default class Acier extends TypeAbstrait {
  constructor() {
    super(TypeEnum.AUCUN);
  }

  multiplicateurAttaque(typePokemonAdverse: Type): number {
    return 1;
  }
}
