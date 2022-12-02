import Attaque from "./Attaque";
import Statistique from "./Statistique";

export default class AttaquePhysique extends Attaque {
  public lancerAttaque(statistiquePokemon: Statistique): number {
    throw new Error("Method not implemented.");
  }
}
