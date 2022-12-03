import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Electrique extends TypeAbstrait {
  constructor() {
    super("Electrique");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
