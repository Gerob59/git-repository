import NatureAbstrait from "./NatureAbstrait";
import NatureEnum from "./NatureEnum";
import Statistique from "../statistique/Statistique";

export default class Modeste extends NatureAbstrait {
  constructor() {
    super(NatureEnum.MODESTE);
  }

  appliquerNature(statistiquePokemon: Statistique): void {
    throw new Error("Method not implemented.");
  }
}
