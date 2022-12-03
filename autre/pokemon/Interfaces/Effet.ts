import Pokemon from "../Classes/Pokemon";

export default interface Effet {
  nomAlteration: string;
  descriptionAlteration: string;
  appliquerEffet(pokemon: Pokemon): void;
}
