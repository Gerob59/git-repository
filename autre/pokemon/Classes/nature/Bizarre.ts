import NatureAbstrait from "./NatureAbstrait";
import NatureEnum from "./NatureEnum";
import Statistique from "../statistique/Statistique";

export default class Bizarre extends NatureAbstrait {
  constructor() {
    super(NatureEnum.BIZARRE);
  }

  appliquerNature(statistiquePokemon: Statistique): void {
    throw new Error("Method not implemented.");
  }
}
