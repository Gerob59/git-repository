import EffetAbstrait from "../EffetAbstrait";
import Pokemon from "../../pokemon/Pokemon";
import StatutInformation from "./StatutInformation";

export default class Empoisonnement extends EffetAbstrait {
  constructor() {
    super(
      StatutInformation.EMPOISONNEMENT.nomStatut,
      StatutInformation.EMPOISONNEMENT.descriptionStatut
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
