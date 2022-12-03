import EffetAbstrait from "../EffetAbstrait";
import Pokemon from "../../Pokemon";
import Statut from "./Statut";

export default class Empoisonnement extends EffetAbstrait {
  constructor() {
    super(
      Statut.EMPOISONNEMENT.nomStatut,
      Statut.EMPOISONNEMENT.descriptionStatut
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
