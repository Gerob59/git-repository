class Chat {
  private _nom!: string;
  private _race!: string;
  private _age!: number;
  private _poid!: number;

  constructor(nom: string, race: string, age: number, poid: number) {
    this.nom = nom;
    this.race = race;
    this.age = age;
    this.poid = poid;
  }

  public get nom(): string {
    return this._nom;
  }

  public get race(): string {
    return this._race;
  }

  public get age(): number {
    return this._age;
  }

  public get poid(): number {
    return this._poid;
  }

  public set nom(nouveauNom: string) {
    if (nouveauNom.trim().length > 1) {
      this._nom = nouveauNom;
    } else {
      throw new Error("Le nom est trop court");
    }
  }

  public set race(nouvelleRace: string) {
    this._race = nouvelleRace;
  }

  public set age(nouvelAge: number) {
    this._age = nouvelAge;
  }

  public set poid(nouveauPoid: number) {
    this._poid = nouveauPoid;
  }

  public afficherChat(): string {
    return `nom:${this.nom}, race:${this.race}, age:${this.age}ans, poid:${this.poid}kilos`;
  }
}

const chat: Chat = new Chat("Pikachu", "europeen", 3, 4);

console.log(chat.afficherChat());
