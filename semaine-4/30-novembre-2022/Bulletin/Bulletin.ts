import Note from "./Note";

export default class Bulletin {
  private _notes: Note[] = [];

  /**
   * Ajoute une nouvelle note au bulletin
   * @param nouvelleNote note à ajouter
   */
  public ajouterNote(nouvelleNote: Note): void {
    if (nouvelleNote.valeur > 20 || nouvelleNote.valeur < 0) {
      throw new Error("La note est incorrecte ! :o Trop choqueR et déçu !");
    } else {
      this._notes.push(nouvelleNote);
    }
  }

  /**
   * Calcule la moyenne générale à partir des notes du bulletin
   * @returns Moyenne
   */
  public calculerMoyenne(): string {
    let somme: number = 0;
    this._notes.forEach((note) => {
      somme += note.valeur;
    });
    return (somme / this._notes.length).toFixed(2);
  }

  /**
   * Affiche toutes les notes
   */
  public afficherNotes(): string {
    let resultat: string = "";
    this._notes.forEach((note) => {
      resultat += note.afficherNote() + "\n";
    });
    return resultat;
  }
}
