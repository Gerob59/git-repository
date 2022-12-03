import Type from "../Interfaces/Type";

export default abstract class TypeAbstrait implements Type {
  nomType: string;

  constructor(nomType: string) {
    this.nomType = nomType;
  }

  abstract multiplicateurAttaque(typePokemonAdverse: Type): number;
}
