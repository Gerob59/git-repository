import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Poison extends TypeAbstrait {
  constructor() {
    super("Poison");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
