import StatistiqueAbstrait from "./StatistiqueAbstrait";

export default class Ev extends StatistiqueAbstrait {
  constructor() {
    super(0, 0, 0, 0, 0, 0);
  }

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

  public gainPV(nombreEv: number): void {
    if (!this.ivMaxAtteint) {
      if (this.pv < 252 && this.pv + nombreEv < 252) {
        this.pv += nombreEv;
      } else {
        this.pv = 252;
      }
    }
  }

  public gainAttaquePhysique(nombreEv: number): void {
    if (!this.ivMaxAtteint) {
      if (this.attaquePhysique < 252 && this.attaquePhysique + nombreEv < 252) {
        this.attaquePhysique += nombreEv;
      } else {
        this.attaquePhysique = 252;
      }
    }
  }

  public gainDefensePhysique(nombreEv: number): void {
    if (!this.ivMaxAtteint) {
      if (this.defensePhysique < 252 && this.defensePhysique + nombreEv < 252) {
        this.defensePhysique += nombreEv;
      } else {
        this.defensePhysique = 252;
      }
    }
  }

  public gainAttaqueSpeciale(nombreEv: number): void {
    if (!this.ivMaxAtteint) {
      if (this.attaqueSpeciale < 252 && this.attaqueSpeciale + nombreEv < 252) {
        this.attaqueSpeciale += nombreEv;
      } else {
        this.attaqueSpeciale = 252;
      }
    }
  }

  public gainDefenseSpeciale(nombreEv: number): void {
    if (!this.ivMaxAtteint) {
      if (this.defenseSpeciale < 252 && this.defenseSpeciale + nombreEv < 252) {
        this.defenseSpeciale += nombreEv;
      } else {
        this.defenseSpeciale = 252;
      }
    }
  }

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
