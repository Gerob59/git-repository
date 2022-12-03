import EffetAbstrait from "../EffetAbstrait";
import Pokemon from "../../Pokemon";
import Statut from "./Statut";

export default class Paralysie extends EffetAbstrait {
  constructor() {
    super(Statut.PARALYSIE.nomStatut, Statut.PARALYSIE.descriptionStatut);
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
