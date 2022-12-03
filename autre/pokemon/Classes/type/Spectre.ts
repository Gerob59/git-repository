import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Spectre extends TypeAbstrait {
  constructor() {
    super("Spectre");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
