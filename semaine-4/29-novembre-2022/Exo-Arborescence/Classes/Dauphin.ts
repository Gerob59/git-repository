import Mammifere from "./Mammifere";
import Aquatique from "../Interfaces/Aquatique";

export default class Dauphin extends Mammifere implements Aquatique {
  constructor(nom: string, poids: number, dateNaissance: Date) {
    super(nom, poids, dateNaissance);
  }
  retenirRespiration(): void {
    console.log(
      `Le ${this.constructor.name} commence à retenir sa respiration.`
    );
  }
  respirerSousLeau(): void {
    this.retenirRespiration();
    this.respirer();
  }

  nager(): void {
    console.log(`Le ${this.constructor.name} se déplace en 3D.`);
  }

  parler(): void {
    console.log(`Le ${this.constructor.name} Cliquette: "CLIC-CLIC !"`);
  }

  deplacer(): void {
    console.log(`Le ${this.constructor.name} se déplace en 2D.`);
  }

  respirer(): void {
    console.log(
      `Le ${this.constructor.name} retourne à la surface afin de pouvoir respirer.`
    );
  }
}
