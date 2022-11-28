abstract class Chat {
  protected _nom!: string;
  protected _age!: number;
  protected _poid!: number;

  constructor(nom: string, age: number, poid: number) {
    this.nom = nom;
    this.age = age;
    this.poid = poid;
  }

  public get nom(): string {
    return this._nom;
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

  public set age(nouvelAge: number) {
    this._age = nouvelAge;
  }

  public set poid(nouveauPoid: number) {
    this._poid = nouveauPoid;
  }

  public abstract afficherChat(): string;
}

class Europeen extends Chat {
  private _surnoms: string[];
  private _origne: string = "Europeen";

  constructor(nom: string, age: number, poid: number, surnoms: string[]) {
    super(nom, age, poid);
    this._surnoms = surnoms;
  }

  public get surnoms(): string {
    return this._surnoms.join(" ");
  }

  public get origne(): string {
    return this._origne;
  }

  public set surnoms(nouveauSurnom: string) {
    this._surnoms.concat(nouveauSurnom);
  }

  public afficherChat(): string {
    return `Son nom est ${this.nom}, il a ${this.age} ans, il pèse ${this.poid} kilos et c'est un chat ${this.origne}\nSes surnoms sont : ${this.surnoms}`;
  }
}

const monChat: Europeen = new Europeen("Pikachu", 3, 4, [
  "pika",
  "chacha",
  "picha",
  "chachou",
  "gros-chat",
]);
console.log(monChat.afficherChat());
