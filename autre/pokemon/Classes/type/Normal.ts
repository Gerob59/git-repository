import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Normal extends TypeAbstrait {
  constructor() {
    super("Normal");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
