import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Acier extends TypeAbstrait {
  constructor() {
    super("Acier");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
