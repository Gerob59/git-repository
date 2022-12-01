import Ev from "./Ev";
import Iv from "./Iv";
import Type from "./Type";

export default abstract class Pokemon {
  _nom: string;
  _typePrincipale: Type;
  _typeSecondaire: Type;
  _evs: Ev;
  _ivs: Iv;
  _nature: Nature;

  constructor(
    nom: string,
    typePrincipale: Type,
    typeSecondaire: Type,
    evs: Ev,
    ivs: Iv,
    nature: Nature
  ) {
    this._nom = nom;
    this._typePrincipale = typePrincipale;
    this._typeSecondaire = typeSecondaire;
    this._evs = evs;
    this._ivs = ivs;
    this._nature = nature;
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
