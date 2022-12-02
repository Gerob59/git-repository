import Ev from "./Ev";
import Iv from "./Iv";
import Nature from "./Nature";
import Attaque from "./Attaque";
import Statistiques from "./Statistique";
import Objet from "./Objet";
import AttaquePhysique from "./AttaquePhysique";
import Type from "./Type";

export default abstract class Pokemon {
  protected _nomPokemon: string;
  protected _pvCourant: number;
  protected _typePrincipale: Type;
  protected _typeSecondaire: Type;
  protected _finalStat: Statistiques;
  protected _statistique: Statistiques;
  protected _evs: Ev = new Ev();
  protected _ivs: Iv = new Iv();
  protected _nature: Nature = Nature[Math.floor(Math.random() * 26)]; //26 est le nombre de nature qu'il existe
  protected _attaques: Attaque[];
  protected _objetTenu: Objet;

  constructor(
    nomPokemon: string,
    typePrincipale: Type,
    typeSecondaire?: Type,
    attaques?: Attaque[]
  ) {
    this.nomPokemon = nomPokemon;
    this._typePrincipale = typePrincipale;
    this._typeSecondaire = typeSecondaire || typePrincipale;
    this._attaques = attaques || [
      new AttaquePhysique("Charge", Type.NORMAL, 30, 35, 100),
    ];
  }

  get nomPokemon(): string {
    return this._nomPokemon;
  }

  set nomPokemon(nomPokemon: string) {
    if (nomPokemon.trim().length > 0) {
      this._nomPokemon = nomPokemon;
    } else {
      throw new Error("nom du Pokemon invalide");
    }
  }

  get typePrincipale(): Type {
    return this._typePrincipale;
  }

  get typeSecondaire(): Type {
    return this._typeSecondaire;
  }

  get evs(): Ev {
    return this._evs;
  }

  get ivs(): Iv {
    return this._ivs;
  }

  get nature(): Nature {
    return this._nature;
  }

  protected appliquerAlteration() {}
  protected appliquerNature() {}
}
