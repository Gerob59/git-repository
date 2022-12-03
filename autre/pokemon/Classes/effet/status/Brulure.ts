import EffetAbstrait from "../EffetAbstrait";
import Pokemon from "../../Pokemon";
import Statut from "./Statut";

export default class Brulure extends EffetAbstrait {
  constructor() {
    super(Statut.BRULURE.nomStatut, Statut.BRULURE.descriptionStatut);
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
