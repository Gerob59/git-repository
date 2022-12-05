import Ev from "./Ev";
import Iv from "./Iv";
import StatistiqueAbstrait from "./StatistiqueAbstrait";

export default class Statistique extends StatistiqueAbstrait {
  constructor(
    pv: number,
    attaquePhysique: number,
    defensePhysique: number,
    attaqueSpeciale: number,
    defenseSpeciale: number,
    vitesse: number
  ) {
    super(
      pv,
      attaquePhysique,
      defensePhysique,
      attaqueSpeciale,
      defenseSpeciale,
      vitesse
    );
  }

  /**
   * Permet de setup les stats réel du pokemon en additonnant les stats de base du pokémon + ivs + evs
   * @returns les stats réel du pokemon
   */
  setFinalStats(iv: Iv, ev: Ev): Statistique {
    //nos statistiques temporaire sont ceux du pokemon par défaut
    const stats: Statistique = new Statistique(
      this.pv,
      this.attaquePhysique,
      this.defensePhysique,
      this.attaqueSpeciale,
      this.defenseSpeciale,
      this.vitesse
    );

    // on additionne les pv
    stats.pv += iv.pv / 100 + ev.pv / 100;

    // on additionne les attaquePhysiques
    stats.attaquePhysique +=
      iv.attaquePhysique / 100 + ev.attaquePhysique / 100;

    // on additionne les defensePhysiques
    stats.defensePhysique +=
      iv.defensePhysique / 100 + ev.defensePhysique / 100;

    // on additionne les attaqueSpeciales
    stats.attaqueSpeciale +=
      iv.attaqueSpeciale / 100 + ev.attaqueSpeciale / 100;

    // on additionne les defenseSpeciales
    stats.defenseSpeciale +=
      iv.defenseSpeciale / 100 + ev.defenseSpeciale / 100;

    // on additionne les vitesses
    stats.vitesse += iv.vitesse / 100 + ev.vitesse / 100;

    //retourne toutes les stats actualisé
    return stats;
  }
}
