import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Dragon extends TypeAbstrait {
  constructor() {
    super("Dragon");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
