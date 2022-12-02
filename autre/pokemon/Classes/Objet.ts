import Statistiques from "./Statistique";

export default class Objet {
  private _nom: string;
  private _effet: number;
  private _desription: string;

  constructor(nom: string, effet: number, desription?: string) {
    this._nom = nom;
    this._effet = effet;
    this._desription = desription || "";
  }

  public get nom(): string {
    return this._nom;
  }
  public get effet(): number {
    return this._effet;
  }
  public get desription(): string {
    return this._desription;
  }

  /**
   * applique l'effet de l'objet au pokemon
   * @param statistiquePokemon les statistiques du Pokemon qui tient l'objet
   * @returns les statistiques modifié du Pokemon qui tient l'objet
   */
  public appliqueEffet(statistiquePokemon: Statistiques): Statistiques {
    // effet a refaire en générique cette fois
    statistiquePokemon.attaquePhysique =
      statistiquePokemon.attaquePhysique * 1.1;
    statistiquePokemon.attaqueSpeciale =
      statistiquePokemon.attaqueSpeciale * 0.9;
    return statistiquePokemon;
  }
}
