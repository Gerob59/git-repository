import Bulletin from "./Bulletin";
import Note from "./Note";

export default class Eleve {
  private _nom: string;
  private _prenom: string;
  private _bulletin: Bulletin;

  constructor(nom: string, prenom: string, bulletin: Bulletin) {
    this._nom = nom;
    this._prenom = prenom;
    this._bulletin = bulletin;
  }

  get nom(): string {
    return this._nom;
  }
  get prenom(): string {
    return this._prenom;
  }

  /**
   * Ajoute une ou des nouvelles notes au bulletin
   * @param nouvelleNotes list des notes à ajouter
   */
  public ajouterNotes(...nouvelleNotes: Note[]): void {
    nouvelleNotes.forEach((note) => {
      this._bulletin.ajouterNote(note);
    });
  }

  /**
   *
   */
  public afficherMoyenne(): string {
    let resultat: string = "";
    resultat += `La moyenne de ${this._prenom} ${
      this._nom
    } est de ${this._bulletin.afficherNotes()}`;
    return resultat;
  }

  /**
   * Affiche toute les notes de l'élève
   */
  public afficherNotes(): string {
    let resultat: string = "";
    resultat += `Les notes de ${this._prenom} ${
      this._nom
    } :\r ${this._bulletin.afficherNotes()}`;
    return resultat;
  }
}
