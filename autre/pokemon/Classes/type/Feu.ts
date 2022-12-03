import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Feu extends TypeAbstrait {
  constructor() {
    super("Feu");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
