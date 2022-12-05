import Ev from "../statistique/Ev";
import Iv from "../statistique/Iv";
import Nature from "../../Interfaces/Nature";
import Attaque from "../attaque/AttaqueAbstrait";
import Statistiques from "../statistique/Statistique";
import Objet from "../objet/Objet";
import Type from "../../Interfaces/Type";
import Effet from "../../Interfaces/Effet";

export default abstract class Pokemon {
  protected _nomPokemon!: string;
  protected _typePrincipale: Type;
  protected _typeSecondaire: Type;
  protected _statistiqueInnee: Statistiques;
  protected _attaques: Attaque[];
  protected _evs: Ev = new Ev();
  protected _ivs: Iv = new Iv();
  protected _effets: Effet[] = [];
  protected _statsFinale: Statistiques;
  protected _pvCourant: number;
  protected _nature: Nature;
  protected _objetTenu: Objet;

  constructor(
    nomPokemon: string,
    typePrincipale: Type,
    typeSecondaire: Type,
    statistiqueInnee: Statistiques,
    attaques: Attaque[]
  ) {
    this.nomPokemon = nomPokemon;
    this._typePrincipale = typePrincipale;
    this._typeSecondaire = typeSecondaire || typePrincipale;
    this._statistiqueInnee = statistiqueInnee;
    this._statsFinale = statistiqueInnee.setFinalStats(this.ivs, this._evs);
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

  protected appliquerNature() {
    this._nature.appliquerNature(this._statsFinale);
  }

  protected appliquerEffets() {}
}
