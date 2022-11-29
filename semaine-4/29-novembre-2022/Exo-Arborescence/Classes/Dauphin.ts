import Mammifere from "./Mammifere";
import Aquatique from "../Interfaces/Aquatique";

export default class Dauphin extends Mammifere implements Aquatique {
  constructor(nom: string, poids: number, dateNaissance: Date) {
    super(nom, poids, dateNaissance);
  }

  respirerSousLeau(): void {
    this.respirer();
  }

  nager(): void {
    this.deplacer();
  }

  parler(): void {
    console.log(`Le ${this.constructor.name} Cliquette: "CLIC-CLIC !"`);
  }

  deplacer(): void {
    console.log(`Le ${this.constructor.name} se déplace en nageant`);
  }

  respirer(): void {
    console.log(
      `Le ${this.constructor.name} retient sa respiration sous l'eau et respire à la surface`
    );
  }

  retenirRespiration(): void {
    console.log(
      `Le ${this.constructor.name} commence à retenir sa respiration.`
    );
    //wait 10s
    console.log(`Le ${this.constructor.name} est mort !`);
  }
}
