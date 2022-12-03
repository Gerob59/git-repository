import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Combat extends TypeAbstrait {
  constructor() {
    super("Combat");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
