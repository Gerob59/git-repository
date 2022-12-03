import Ev from "./statistique/Ev";
import Iv from "./statistique/Iv";
import Nature from "./nature/Nature";
import Attaque from "./attaque/Attaque";
import Statistiques from "./statistique/Statistique";
import Objet from "./objet/Objet";
import Type from "../Interfaces/Type";
import Effet from "../Interfaces/Effet";

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
  protected _effets: Effet[] = [];
  protected _objetTenu: Objet;

  constructor(
    nomPokemon: string,
    typePrincipale: Type,
    typeSecondaire: Type,
    attaques: Attaque[]
  ) {
    this.nomPokemon = nomPokemon;
    this._typePrincipale = typePrincipale;
    this._typeSecondaire = typeSecondaire || typePrincipale;
    this._attaques = attaques;
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
  protected appliquerEffets() {}
}
