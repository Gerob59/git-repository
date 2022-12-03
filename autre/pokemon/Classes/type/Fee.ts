import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Fee extends TypeAbstrait {
  constructor() {
    super("Fee");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
