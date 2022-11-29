import Mammifere from "./Mammifere";
import Aquatique from "../Interfaces/Aquatique";

export default class Dauphin extends Mammifere implements Aquatique {
  constructor(nom: string, poids: number, dateNaissance: Date) {
    super(nom, poids, dateNaissance);
  }

  display(): void {
    throw new Error("Method not implemented.");
  }

  respirerSousEau(): void {
    throw new Error("Method not implemented.");
  }

  nager(): void {
    throw new Error("Method not implemented.");
  }

  cliquetter(): void {
    throw new Error("Method not implemented.");
  }
}
