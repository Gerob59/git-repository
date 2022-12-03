import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Insecte extends TypeAbstrait {
  constructor() {
    super("Insecte");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
