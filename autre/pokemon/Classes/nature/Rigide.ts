import NatureAbstrait from "./NatureAbstrait";
import NatureEnum from "./NatureEnum";
import Statistique from "../statistique/Statistique";

export default class Rigide extends NatureAbstrait {
  constructor() {
    super(NatureEnum.RIGIDE);
  }

  appliquerNature(statistiquePokemon: Statistique): void {
    throw new Error("Method not implemented.");
  }
}
