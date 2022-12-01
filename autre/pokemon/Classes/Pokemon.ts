import Ev from "./Ev";
import Iv from "./Iv";
import Type from "./Type";
import Nature from "./Nature";
import Attaque from "./Attaque";
import Categorie from "./Categorie";

export default abstract class Pokemon {
  _nom: string;
  _typePrincipale: Type;
  _typeSecondaire: Type;
  _evs: Ev;
  _ivs: Iv;
  _nature: Nature;
  _attaques: Attaque[];

  constructor(
    nom: string,
    typePrincipale: Type,
    typeSecondaire?: Type,
    attaques?: Attaque[]
  ) {
    this._nom = nom;
    this._typePrincipale = typePrincipale;
    this._typeSecondaire = typeSecondaire || typePrincipale;
    this._evs = new Ev();
    this._ivs = new Iv();
    this._nature = Nature[Math.floor(Math.random() * this._nature.length)];
    this._attaques = attaques || [
      new Attaque("Charge", Type.NORMAL, Categorie.PHYSIQUE, 35, 35),
    ];
  }

  get nom(): string {
    return this._nom;
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
