import Type from "../../Interfaces/Type";
import Statistique from "../statistique/Statistique";
import Effet from "../../Interfaces/Effet";
import Attaque from "../../Interfaces/Attaque";

export default abstract class AttaqueAbstrait implements Attaque {
  nomAttaque: string;
  typeAttaque: Type;
  descriptionAttaque: string;
  puissanceAttaque: number;
  precisionAttaque: number;
  ppAttaque: number;
  infligeStatus: Effet | undefined;

  constructor(
    nomAttaque: string,
    typeAttaque: Type,
    ppAttaque: number,
    puissanceAttaque: number,
    precisionAttaque: number,
    descriptionAttaque: string,
    infligeStatus?: Effet
  ) {
    this.nomAttaque = nomAttaque;
    this.typeAttaque = typeAttaque;
    this.descriptionAttaque = descriptionAttaque;
    this.puissanceAttaque = puissanceAttaque;
    this.precisionAttaque = precisionAttaque;
    this.ppAttaque = ppAttaque;
    this.infligeStatus = infligeStatus || undefined;
  }

  /**
   * Redéfinis dans une sous-classe afin de savoir si on utilise l'attaque spéciale ou l'attaque physique.
   * @param statistiquePokemon les statistiques du pokémon afin de calculer le montant de dégâts.
   */
  protected abstract typeDegats(statistiquePokemon: Statistique): number;

  /**
   * Lance l'attaque du pokémon en fonction de la puissance de l'attaque et des statistiques du pokémon.
   * Redéfinis les dégâts avec une sous fonction : typeDegats(statistiquePokemon).
   * @param statistiquePokemon Les statistiques du pokémon afin de calculer le montant de dégâts.
   * @returns Le montant de dégâts de l'attaque avant calcul de la défense adverse.
   */
  public lancerAttaque(statistiquePokemon: Statistique): number {
    if (this.assezPP()) {
      if (this.reussisToucher()) {
        return this.typeDegats(statistiquePokemon);
      } else {
        return 0;
      }
    } else {
      console.log("relancez une autre attaque");
      return -1; //cas d'arret à gérer au moment d'appel de l'attaque
    }
  }

  /**
   * Le pokémon essaye de toucher l'adversaire avec son attaque grâce à la précision de son attaque.
   * @returns TRUE, si l'attaque est réussis / FALSE, sinon.
   */
  private reussisToucher(): boolean {
    let rate: number = Math.random() * this.precisionAttaque;
    if (rate > this.precisionAttaque) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Vérifie si l'attaque à assez de PP pour lancer l'attaque.
   * @returns TRUE, si assez de PP / FALSE, Sinon.
   */
  private assezPP(): boolean {
    if (this.ppAttaque > 0) {
      this.ppAttaque--;
      return true;
    } else {
      console.log(
        "La compétence ne pas etre utilisé, elle ne possede plus de PP"
      );
      return false;
    }
  }
}
