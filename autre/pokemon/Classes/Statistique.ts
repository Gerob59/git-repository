export default abstract class Statistiques {
  protected _pv: number;
  protected _attaque: number;
  protected _defense: number;
  protected _attaqueSpeciale: number;
  protected _defenseSpeciale: number;
  protected _vitesse: number;

  constructor(
    pv: number,
    attaque: number,
    defense: number,
    attaqueSpeciale: number,
    defenseSpeciale: number,
    vitesse: number
  ) {
    this._pv = pv;
    this._attaque = attaque;
    this._defense = defense;
    this._attaqueSpeciale = attaqueSpeciale;
    this._defenseSpeciale = defenseSpeciale;
    this._vitesse = vitesse;
  }

  public get pv(): number {
    return this._pv;
  }

  public get attaque(): number {
    return this._attaque;
  }

  public get defense(): number {
    return this._defense;
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

  public set attaque(nouvelleAttaque) {
    this._attaque = nouvelleAttaque;
  }

  public set defense(nouvelleDefense: number) {
    this._defense = nouvelleDefense;
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
