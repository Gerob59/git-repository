import Effet from "./Effet";
import Statistiques from "./Statistiques";
import Type from "./Type";

export default interface Attaque {
  nomAttaque: string;
  typeAttaque: Type;
  descriptionAttaque: string;
  puissanceAttaque: number;
  precisionAttaque: number;
  ppAttaque: number;
  infligeStatus: Effet | undefined;

  lancerAttaque(statistiquePokemon: Statistiques): number;
}
