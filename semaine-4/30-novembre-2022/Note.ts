export default class Note {
  private _matiere: string;
  private _valeur: number;

  constructor(matiere: string, note: number) {
    this._matiere = matiere;
    this._valeur = note;
  }

  get valeur(): number {
    return this._valeur;
  }

  get valeurSurVingt(): string {
    return `${this._valeur}/20`;
  }

  get matiere(): string {
    return this._matiere;
  }

  /**
   * Affiche la note sous forme de chaine de caractere au format de "matière : valeur/20"
   */
  public afficherNote(): string {
    return `${this.matiere} : ${this.valeurSurVingt}`;
  }
}
