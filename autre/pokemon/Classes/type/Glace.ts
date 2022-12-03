import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Glace extends TypeAbstrait {
  constructor() {
    super("Glace");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
