import Ev from "../statistique/Ev";
import Iv from "../statistique/Iv";
import Nature from "../../Interfaces/Nature";
import Attaque from "../../Interfaces/Attaque";
import Statistiques from "../statistique/Statistique";
import Objet from "../objet/Objet";
import Type from "../../Interfaces/Type";
import Effet from "../../Interfaces/Effet";
import NatureFactory from "../nature/NatureFactory";

export default class Pokemon {
  protected _nomPokemon!: string;
  protected _typePrincipale: Type;
  protected _typeSecondaire: Type | undefined;
  protected _statistiqueInnee: Statistiques;
  protected _attaques: Attaque[];
  protected _evs: Ev = new Ev();
  protected _ivs: Iv = new Iv();
  protected _effets: Effet[] = [];
  protected _statsFinale: Statistiques;
  protected _pvCourant: number;
  protected _nature: Nature = NatureFactory.createNature();
  protected _objetTenu: Objet | undefined;

  constructor(
    nomPokemon: string,
    statistiqueInnee: Statistiques,
    attaques: Attaque[],
    typePrincipale: Type,
    typeSecondaire?: Type
  ) {
    this.nomPokemon = nomPokemon;
    this._typePrincipale = typePrincipale;
    this._typeSecondaire = typeSecondaire || undefined;
    this._statistiqueInnee = statistiqueInnee;
    this._statsFinale = statistiqueInnee.setFinalStats(this.ivs, this._evs);
    this._pvCourant = this._statsFinale.pv;
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

  get typeSecondaire(): Type | undefined {
    return this._typeSecondaire || undefined;
  }

  get evs(): Ev {
    return this._evs;
  }

  get ivs(): Iv {
    return this._ivs;
  }

  get statistiqueInnee(): Statistiques {
    return this._statistiqueInnee;
  }

  get statsFinale(): Statistiques {
    return this._statsFinale;
  }

  get nature(): Nature {
    return this._nature;
  }

  get attaques(): Attaque[] {
    return this._attaques;
  }

  protected appliquerNature() {
    this._nature.appliquerNature(this._statsFinale);
  }

  protected appliquerEffets() {}
}
