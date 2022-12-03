import Alteration from "./Alteration";
import Pokemon from "../Pokemon";

export default class Anti_soin extends Alteration {
  constructor(nomAlteration: string, descriptionAlteration: string) {
    super(nomAlteration, descriptionAlteration);
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
