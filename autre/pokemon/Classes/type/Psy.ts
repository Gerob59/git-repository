import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Psy extends TypeAbstrait {
  constructor() {
    super("Psy");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
