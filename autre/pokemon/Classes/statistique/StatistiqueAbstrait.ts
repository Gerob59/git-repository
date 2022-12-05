import Statistiques from "../../Interfaces/Statistiques";

export default class StatistiqueAbstrait implements Statistiques {
  pv: number;
  attaquePhysique: number;
  defensePhysique: number;
  attaqueSpeciale: number;
  defenseSpeciale: number;
  vitesse: number;

  constructor(
    pv: number,
    attaquePhysique: number,
    defensePhysique: number,
    attaqueSpeciale: number,
    defenseSpeciale: number,
    vitesse: number
  ) {
    this.pv = pv;
    this.attaquePhysique = attaquePhysique;
    this.defensePhysique = defensePhysique;
    this.attaqueSpeciale = attaqueSpeciale;
    this.defenseSpeciale = defenseSpeciale;
    this.vitesse = vitesse;
  }
}
