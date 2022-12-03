import Nature from "../../Interfaces/Nature";
import Statistique from "../statistique/Statistique";

export default abstract class NatureAbstrait implements Nature {
  _nomNature: string;

  constructor(nomNature: string) {
    this._nomNature = nomNature;
  }

  abstract appliquerNature(statistiquePokemon: Statistique): void;
}
