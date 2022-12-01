import Statistiques from "./Statistique";

export default class Ev extends Statistiques {
  constructor(
    pv: number,
    attaque: number,
    defense: number,
    attaqueSpeciale: number,
    defenseSpeciale: number,
    vitesse: number
  ) {
    super(
      Math.floor(Math.random() * 32),
      Math.floor(Math.random() * 32),
      Math.floor(Math.random() * 32),
      Math.floor(Math.random() * 32),
      Math.floor(Math.random() * 32),
      Math.floor(Math.random() * 32)
    );
  }
}
