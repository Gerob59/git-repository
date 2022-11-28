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

  get nom(): string {
    return this._nom;
  }
  get race(): string {
    return this._race;
  }
  get age(): number {
    return this._age;
  }
  get poid(): number {
    return this._poid;
  }
  set nom(nouveauNom: string) {
    this._nom = nouveauNom;
  }
  set race(nouvelleRace: string) {
    this._race = nouvelleRace;
  }
  set age(nouvelleAge: number) {
    this._age = nouvelleAge;
  }
  set poid(nouveauPoid: number) {
    this._poid = nouveauPoid;
  }

  afficherChat(): string {
    return `nom:${this.nom}, race:${this.race}, age:${this.age}ans, poid:${this.poid}kilos`;
  }
}

const chat: Chat = new Chat("Pikachu", "europeen", 3, 4);

console.log(chat.afficherChat());
