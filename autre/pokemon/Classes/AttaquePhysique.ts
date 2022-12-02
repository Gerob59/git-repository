import Attaque from "./Attaque";
import Statistique from "./Statistique";
import { Type } from "./Type";

export default class AttaquePhysique extends Attaque {
  public lancerAttaque(statistiquePokemon: Statistique): number {
    if (this.assezPP()) {
      if (this.reussisToucher()) {
        return this.puissanceAttaque * statistiquePokemon.attaquePhysique;
      } else {
        return 0;
      }
    } else {
      console.log("relancez une autre attaque");
      return -1; //cas d'arret à gérer au moment d'appel de l'attaque
    }
  }
}
