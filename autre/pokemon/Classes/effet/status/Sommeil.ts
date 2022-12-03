import EffetAbstrait from "../EffetAbstrait";
import Pokemon from "../../Pokemon";
import Statut from "./Statut";

export default class Sommeil extends EffetAbstrait {
  constructor(nomAlteration: string, descriptionAlteration: string) {
    super(Statut.SOMMEIL.nomStatut, Statut.SOMMEIL.descriptionStatut);
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
