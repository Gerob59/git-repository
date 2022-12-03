import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Plante extends TypeAbstrait {
  constructor() {
    super("Plante");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
