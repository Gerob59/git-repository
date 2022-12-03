import EffetAbstrait from "../EffetAbstrait";
import Pokemon from "../../Pokemon";
import Statut from "./Statut";

export default class Gel extends EffetAbstrait {
  constructor() {
    super(Statut.GEL.nomStatut, Statut.GEL.descriptionStatut);
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
