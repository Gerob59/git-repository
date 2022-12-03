import Pokemon from "../Classes/Pokemon";

export default interface Effet {
  nomEffet: string;
  descriptionEffet: string;
  appliquerEffet(pokemon: Pokemon): void;
}
// https://www.metamorph6iv.net/t31427-notion-strategique-les-statuts-et-alteration-d-etat
