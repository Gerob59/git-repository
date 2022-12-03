import NatureAbstrait from "./NatureAbstrait";
import NatureEnum from "./NatureEnum";
import Statistique from "../statistique/Statistique";

export default class Solo extends NatureAbstrait {
  constructor() {
    super(NatureEnum.SOLO);
  }

  appliquerNature(statistiquePokemon: Statistique): void {
    throw new Error("Method not implemented.");
  }
}
