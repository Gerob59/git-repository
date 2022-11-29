import Mammifere from "./Mammifere";
import Terrestre from "../Interfaces/Terrestre";

export default class Chat extends Mammifere implements Terrestre {
  constructor(nom: string, poids: number, dateNaissance: Date) {
    super(nom, poids, dateNaissance);
  }
  RespirerHorsDeLEau(): void {
    this.respirer();
  }
  marcher(): void {
    this.deplacer();
  }

  parler(): void {
    console.log(`Le ${this.constructor.name} Miaule: "MIAOU !"`);
  }

  deplacer(): void {
    console.log(`Le ${this.constructor.name} se déplace en marchant`);
  }

  respirer(): void {
    console.log(`Le ${this.constructor.name} respire de l'air`);
  }
}
