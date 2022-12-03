import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Roche extends TypeAbstrait {
  constructor() {
    super("Roche");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
