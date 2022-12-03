import Statistique from "../Classes/statistique/Statistique";

export default interface Nature {
  _nomNature: string;
  randomNature(): Nature;
  appliquerNature(statistiquePokemon: Statistique): void;
}
