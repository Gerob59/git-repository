import NatureAbstrait from "./NatureAbstrait";
import NatureEnum from "./NatureEnum";
import Statistique from "../statistique/Statistique";

export default class Presse extends NatureAbstrait {
  constructor() {
    super(NatureEnum.PRESSE);
  }

  appliquerNature(statistiquePokemon: Statistique): void {
    throw new Error("Method not implemented.");
  }
}
