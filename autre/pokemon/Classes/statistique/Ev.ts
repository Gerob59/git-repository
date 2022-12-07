import StatistiqueAbstrait from "./StatistiqueAbstrait";

export default class Ev extends StatistiqueAbstrait {
  constructor() {
    super(0, 0, 0, 0, 0, 0);
  }

  /**
   * Calcul le total d'ivs d'un pokémon pour savoir s'il a atteint la limite max (510)
   * @returns TRUE, si on peut ajouter des evs / FALSE, sinon
   */
  private ivMaxAtteint(): boolean {
    if (
      this.pv +
        this.attaquePhysique +
        this.defensePhysique +
        this.attaqueSpeciale +
        this.defenseSpeciale +
        this.vitesse <
      510
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Permet d'ajouter un nombre définis d'ev quand on bat un pokémon
   * @param nombreEv le nombre d'ev de point de vie à ajouter au statistiques du pokémon
   */
  public gainPV(nombreEv: number): void {
    if (!this.ivMaxAtteint) {
      if (this.pv < 252 && this.pv + nombreEv < 252) {
        this.pv += nombreEv;
      } else {
        this.pv = 252;
      }
    }
  }

  /**
   * Permet d'ajouter un nombre définis d'ev quand on bat un pokémon
   * @param nombreEv le nombre d'ev d'attaque physique à ajouter au statistiques du pokémon
   */
  public gainAttaquePhysique(nombreEv: number): void {
    if (!this.ivMaxAtteint) {
      if (this.attaquePhysique < 252 && this.attaquePhysique + nombreEv < 252) {
        this.attaquePhysique += nombreEv;
      } else {
        this.attaquePhysique = 252;
      }
    }
  }

  /**
   * Permet d'ajouter un nombre définis d'ev quand on bat un pokémon
   * @param nombreEv le nombre d'ev de défense physique à ajouter au statistiques du pokémon
   */
  public gainDefensePhysique(nombreEv: number): void {
    if (!this.ivMaxAtteint) {
      if (this.defensePhysique < 252 && this.defensePhysique + nombreEv < 252) {
        this.defensePhysique += nombreEv;
      } else {
        this.defensePhysique = 252;
      }
    }
  }

  /**
   * Permet d'ajouter un nombre définis d'ev quand on bat un pokémon
   * @param nombreEv le nombre d'ev d'attaque spéciale à ajouter au statistiques du pokémon
   */
  public gainAttaqueSpeciale(nombreEv: number): void {
    if (!this.ivMaxAtteint) {
      if (this.attaqueSpeciale < 252 && this.attaqueSpeciale + nombreEv < 252) {
        this.attaqueSpeciale += nombreEv;
      } else {
        this.attaqueSpeciale = 252;
      }
    }
  }

  /**
   * Permet d'ajouter un nombre définis d'ev quand on bat un pokémon
   * @param nombreEv le nombre d'ev de défense spéciale à ajouter au statistiques du pokémon
   */
  public gainDefenseSpeciale(nombreEv: number): void {
    if (!this.ivMaxAtteint) {
      if (this.defenseSpeciale < 252 && this.defenseSpeciale + nombreEv < 252) {
        this.defenseSpeciale += nombreEv;
      } else {
        this.defenseSpeciale = 252;
      }
    }
  }

  /**
   * Permet d'ajouter un nombre définis d'ev quand on bat un pokémon
   * @param nombreEv le nombre d'ev de vitesse à ajouter au statistiques du pokémon
   */
  public gainVitesse(nombreEv: number): void {
    if (!this.ivMaxAtteint) {
      if (this.vitesse < 252 && this.vitesse + nombreEv < 252) {
        this.vitesse += nombreEv;
      } else {
        this.vitesse = 252;
      }
    }
  }
}
