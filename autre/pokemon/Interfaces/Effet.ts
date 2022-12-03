import Pokemon from "../Classes/pokemon/Pokemon";

export default interface Effet {
  nomEffet: string;
  descriptionEffet: string;
  appliquerEffet(pokemon: Pokemon): void;
}
// https://www.metamorph6iv.net/t31427-notion-strategique-les-statuts-et-alteration-d-etat
