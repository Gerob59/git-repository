class Humain {
  protected _nom!: string;
  protected _prenom!: string;
  protected _dateNaissance!: Date;

  constructor(nom: string, prenom: string, naissance: Date) {
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = naissance;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(nouveauNom: string) {
    this._nom = nouveauNom;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(nouveauPrenom: string) {
    this._prenom = nouveauPrenom;
  }

  get dateNaissance(): Date {
    return this._dateNaissance;
  }

  set dateNaissance(nouvelleDateNaissance: Date) {
    this._dateNaissance = nouvelleDateNaissance;
  }

  get age(): number {
    const dateDeNaissance = this.dateNaissance.toString();
    const year: number = Number(dateDeNaissance.substring(0, 4));
    const month: number = Number(dateDeNaissance.substring(4, 2)) - 1;
    const day: number = Number(dateDeNaissance.substring(6, 2));
    const today: Date = new Date();
    let age = today.getFullYear() - year;
    if (
      today.getMonth() < month ||
      (today.getMonth() == month && today.getDate() < day)
    ) {
      age--;
    }
    return age;
  }
}
class Formateur extends Humain {
  private _societe!: string;
  constructor(nom: string, prenom: string, naissance: Date) {
    super(nom, prenom, naissance);
  }

  get societe(): string {
    return this._societe;
  }

  set societe(nouvelleSociete: string) {
    this._societe = nouvelleSociete;
  }
}

const formateur1: Formateur = new Formateur(
  "Devos",
  "Alexandre",
  new Date("1994-06-14")
);
formateur1.societe = "Sémifir";

console.log(
  `Aujourd'hui, ${formateur1.prenom} ${formateur1.nom} est le formateur venant de la société ${formateur1.societe}. Il a ${formateur1.age}ans`
);
