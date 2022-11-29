import Mammifere from "./Mammifere";
import Terrestre from "../Interfaces/Terrestre";

export default class Chat extends Mammifere implements Terrestre {
  constructor(nom: string, poids: number, dateNaissance: Date) {
    super(nom, poids, dateNaissance);
  }

  marcher(): void {
    throw new Error("Method not implemented.");
  }

  miauler(): void {
    throw new Error("Method not implemented.");
  }

  respirerHorsDeLeau(): void {
    throw new Error("Method not implemented.");
  }
}
