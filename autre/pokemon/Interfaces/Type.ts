export default interface Type {
  nomType: string;
  multiplicateurAttaque(typePokemonAdverse: Type): number;
}
