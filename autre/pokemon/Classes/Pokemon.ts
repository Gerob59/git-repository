import Ev from "./Ev";
import Iv from "./Iv";
import { Type } from "./Type";
import { tableType } from "./Type";
import Nature from "./Nature";
import Attaque from "./Attaque";
import Categorie from "./Categorie";
import Statistiques from "./Statistique";
import Objet from "./Objet";

export default abstract class Pokemon {
  protected _nomPokemon!: string;
  protected _typePrincipale: Type;
  protected _typeSecondaire: Type;
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
      new Attaque("Charge", Type.NORMAL, Categorie.PHYSIQUE, 35, 35),
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
}
