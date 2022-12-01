import Statistiques from "./Statistique";

export default class Iv extends Statistiques {
  constructor(
    pv: number,
    attaque: number,
    defense: number,
    attaqueSpeciale: number,
    defenseSpeciale: number,
    vitesse: number
  ) {
    super(0, 0, 0, 0, 0, 0);
  }
}
