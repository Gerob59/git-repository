import Statistique from "../Classes/statistique/Statistique";

export default interface Nature {
  _nomNature: string;
  appliquerNature(statistiquePokemon: Statistique): void;
}
