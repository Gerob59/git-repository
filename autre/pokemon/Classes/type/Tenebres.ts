import Type from "../../Interfaces/Type";
import TypeAbstrait from "../TypeAbstrait";

export default class Tenebres extends TypeAbstrait {
  constructor() {
    super("Tenebres");
  }
  multiplicateurAttaque(typePokemonAdverse: Type): number {
    throw new Error("Method not implemented.");
  }
}
