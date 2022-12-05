import EffetAbstrait from "../EffetAbstrait";
import Pokemon from "../../pokemon/Pokemon";
import StatutInformation from "./StatutInformation";

export default class Paralysie extends EffetAbstrait {
  constructor() {
    super(
      StatutInformation.PARALYSIE.nomStatut,
      StatutInformation.PARALYSIE.descriptionStatut
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
