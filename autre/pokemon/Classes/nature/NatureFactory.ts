import Nature from "../../Interfaces/Nature";
import Assure from "./Assure";
import Bizarre from "./Bizarre";
import Brave from "./Brave";
import Calme from "./Calme";
import Discret from "./Discret";
import Docile from "./Docile";
import Doux from "./Doux";
import Foufou from "./Foufou";
import Gentil from "./Gentil";
import Hardi from "./Hardi";
import Jovial from "./Jovial";
import Lache from "./Lache";
import Malin from "./Malin";
import Malpoli from "./Malpoli";
import Mauvais from "./Mauvais";
import Modeste from "./Modeste";
import Naif from "./Naif";
import Presse from "./Presse";
import Prudent from "./Prudent";
import Pudique from "./Pudique";
import Relax from "./Relax";
import Rigide from "./Rigide";
import Serieux from "./Serieux";
import Solo from "./Solo";
import Timide from "./Timide";

export default class NatureFactory {
  /**
   * Factory sur la nature des pokémon qui créé aléatoirement une nature parmis toutes les natures
   * @returns la nature créée pour le pokémon
   */
  public static createNature(): Nature {
    let aleatoire: number = Math.floor(Math.random() * 25); // il existe 25 natures différentes
    if (aleatoire === 0) {
      return new Assure();
    } else if (aleatoire === 1) {
      return new Bizarre();
    } else if (aleatoire === 2) {
      return new Brave();
    } else if (aleatoire === 3) {
      return new Calme();
    } else if (aleatoire === 4) {
      return new Discret();
    } else if (aleatoire === 5) {
      return new Docile();
    } else if (aleatoire === 6) {
      return new Doux();
    } else if (aleatoire === 7) {
      return new Foufou();
    } else if (aleatoire === 8) {
      return new Gentil();
    } else if (aleatoire === 9) {
      return new Hardi();
    } else if (aleatoire === 10) {
      return new Jovial();
    } else if (aleatoire === 11) {
      return new Lache();
    } else if (aleatoire === 12) {
      return new Malin();
    } else if (aleatoire === 13) {
      return new Malpoli();
    } else if (aleatoire === 14) {
      return new Mauvais();
    } else if (aleatoire === 15) {
      return new Modeste();
    } else if (aleatoire === 16) {
      return new Naif();
    } else if (aleatoire === 17) {
      return new Presse();
    } else if (aleatoire === 18) {
      return new Prudent();
    } else if (aleatoire === 19) {
      return new Pudique();
    } else if (aleatoire === 20) {
      return new Relax();
    } else if (aleatoire === 21) {
      return new Rigide();
    } else if (aleatoire === 22) {
      return new Serieux();
    } else if (aleatoire === 23) {
      return new Solo();
    } else {
      return new Timide();
    }
  }
}
