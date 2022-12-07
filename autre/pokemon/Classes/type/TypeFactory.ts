import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import Acier from "./Acier";
import Combat from "./Combat";
import Dragon from "./Dragon";
import Eau from "./Eau";
import Electrique from "./Electrique";
import Fee from "./Fee";
import Feu from "./Feu";
import Glace from "./Glace";
import Insecte from "./Insecte";
import Normal from "./Normal";
import Plante from "./Plante";
import Poison from "./Poison";
import Psy from "./Psy";
import Roche from "./Roche";
import Sol from "./Sol";
import Spectre from "./Spectre";
import Tenebres from "./Tenebres";
import Vol from "./Vol";

export default class TypeFactory {
  /**
   * Utilise l'enumeration de type afin de ne pouvoir que créer des types possibles pour les pokémon / attaques
   * @param typePokemon Le type que l'on désire en uilisant l'enum de type
   * @returns Créer le nouveau type demandé
   */
  public static createType(typePokemon: TypeEnum): Type {
    if (typePokemon === TypeEnum.ACIER) {
      return new Acier();
    } else if (typePokemon === TypeEnum.COMBAT) {
      return new Combat();
    } else if (typePokemon === TypeEnum.DRAGON) {
      return new Dragon();
    } else if (typePokemon === TypeEnum.EAU) {
      return new Eau();
    } else if (typePokemon === TypeEnum.ELECTRIQUE) {
      return new Electrique();
    } else if (typePokemon === TypeEnum.FEE) {
      return new Fee();
    } else if (typePokemon === TypeEnum.FEU) {
      return new Feu();
    } else if (typePokemon === TypeEnum.GLACE) {
      return new Glace();
    } else if (typePokemon === TypeEnum.INSECTE) {
      return new Insecte();
    } else if (typePokemon === TypeEnum.PLANTE) {
      return new Plante();
    } else if (typePokemon === TypeEnum.POISON) {
      return new Poison();
    } else if (typePokemon === TypeEnum.PSY) {
      return new Psy();
    } else if (typePokemon === TypeEnum.ROCHE) {
      return new Roche();
    } else if (typePokemon === TypeEnum.SOL) {
      return new Sol();
    } else if (typePokemon === TypeEnum.SPECTRE) {
      return new Spectre();
    } else if (typePokemon === TypeEnum.TENEBRES) {
      return new Tenebres();
    } else if (typePokemon === TypeEnum.VOL) {
      return new Vol();
    } else {
      return new Normal();
    }
  }
}
