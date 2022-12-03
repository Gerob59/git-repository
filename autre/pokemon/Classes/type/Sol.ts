import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Sol extends TypeAbstrait {
  constructor() {
    super("Sol");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
