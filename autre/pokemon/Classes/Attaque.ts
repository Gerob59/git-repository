import { Type } from "./Type";
import Categorie from "./Categorie";

export default interface Attaque {
  nom: string;
  pp: number;
  descriptionAttaque: string;
  lancerAttaque();
}
