export default class Statistiques {
  protected _pv: number;
  protected _attaquePhysique: number;
  protected _defensePhysique: number;
  protected _attaqueSpeciale: number;
  protected _defenseSpeciale: number;
  protected _vitesse: number;

  constructor(
    pv: number,
    attaquePhysique: number,
    defensePhysique: number,
    attaqueSpeciale: number,
    defenseSpeciale: number,
    vitesse: number
  ) {
    this._pv = pv;
    this._attaquePhysique = attaquePhysique;
    this._defensePhysique = defensePhysique;
    this._attaqueSpeciale = attaqueSpeciale;
    this._defenseSpeciale = defenseSpeciale;
    this._vitesse = vitesse;
  }

  public get pv(): number {
    return this._pv;
  }

  public get attaquePhysique(): number {
    return this._attaquePhysique;
  }

  public get defensePhysique(): number {
    return this._defensePhysique;
  }

  public get attaqueSpeciale(): number {
    return this._attaqueSpeciale;
  }

  public get defenseSpeciale(): number {
    return this._defenseSpeciale;
  }

  public get vitesse(): number {
    return this._vitesse;
  }

  public set pv(nouveauPV: number) {
    this._pv = nouveauPV;
  }

  public set attaquePhysique(nouvelleAttaquePhysique) {
    this._attaquePhysique = nouvelleAttaquePhysique;
  }

  public set defensePhysique(nouvelleDefensePhysique: number) {
    this._defensePhysique = nouvelleDefensePhysique;
  }

  public set attaqueSpeciale(nouvelleAttaqueSpeciale: number) {
    this._attaqueSpeciale = nouvelleAttaqueSpeciale;
  }

  public set defenseSpeciale(nouvelleDefenseSpeciale: number) {
    this._defenseSpeciale = nouvelleDefenseSpeciale;
  }

  public set vitesse(nouvelleVitesse: number) {
    this._vitesse = nouvelleVitesse;
  }
}