import Ev from "./statistique/Ev";
import Iv from "./statistique/Iv";
import Nature from "../Interfaces/Nature";
import Attaque from "./attaque/Attaque";
import Statistiques from "./statistique/Statistique";
import Objet from "./objet/Objet";
import Type from "../Interfaces/Type";
import Effet from "../Interfaces/Effet";

export default abstract class Pokemon {
  protected _nomPokemon!: string;
  protected _typePrincipale: Type;
  protected _typeSecondaire: Type;
  protected _statistiqueInnee: Statistiques;
  protected _attaques: Attaque[];
  protected _evs: Ev = new Ev();
  protected _ivs: Iv = new Iv();
  protected _effets: Effet[] = [];
  protected _statsFinale: Statistiques = this.setFinalStats();
  protected _pvCourant: number = this._statsFinale.pv;
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

  /**
   * Permet de setup les stats réel du pokemon en additonnant les stats de base du pokémon + ivs + evs
   * @returns les stats réel du pokemon
   */
  private setFinalStats(): Statistiques {
    //nos statistiques temporaire sont ceux du pokemon par défaut
    const stats: Statistiques = this._statistiqueInnee;

    // on additionne les pv
    stats.pv += this._ivs.pv / 100 + this._evs.pv / 100;

    // on additionne les attaquePhysiques
    stats.attaquePhysique +=
      this._ivs.attaquePhysique / 100 + this._evs.attaquePhysique / 100;

    // on additionne les defensePhysiques
    stats.defensePhysique +=
      this._ivs.defensePhysique / 100 + this._evs.defensePhysique / 100;

    // on additionne les attaqueSpeciales
    stats.attaqueSpeciale +=
      this._ivs.attaqueSpeciale / 100 + this._evs.attaqueSpeciale / 100;

    // on additionne les defenseSpeciales
    stats.defenseSpeciale +=
      this._ivs.defenseSpeciale / 100 + this._evs.defenseSpeciale / 100;

    // on additionne les vitesses
    stats.vitesse += this._ivs.vitesse / 100 + this._evs.vitesse / 100;

    //retourne toutes les stats actualisé
    return stats;
  }
}
