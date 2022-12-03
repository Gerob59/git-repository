import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Vol extends TypeAbstrait {
  constructor() {
    super("Vol");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
