import Type from "../../Interfaces/Type";

export default abstract class TypeAbstrait implements Type {
  nomType: string;

  constructor(nomType: string) {
    this.nomType = nomType;
  }

  /**
   * redéfinis dans une sous-classe pour avoir les résistances ou les faiblesses du pokémon adverse
   * @param typePokemonAdverse Le type du pokémon adverse pour avoir le multiplicateur de résistance
   */
  abstract multiplicateurAttaque(typePokemonAdverse: Type): number;
}
