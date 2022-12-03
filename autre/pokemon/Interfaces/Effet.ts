import Pokemon from "../Classes/Pokemon";

export default interface Effet {
  nomAlteration: string;
  descriptionAlteration: string;
  appliquerEffet(pokemon: Pokemon): void;
}
// https://www.metamorph6iv.net/t31427-notion-strategique-les-statuts-et-alteration-d-etat
