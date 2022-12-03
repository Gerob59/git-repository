import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Eau extends TypeAbstrait {
  constructor() {
    super("Eau");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
