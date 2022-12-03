import Pokemon from "../Pokemon";

export default abstract class Objet {
  protected _nom: string;
  protected _effet: number;
  protected _desription: string;

  constructor(nom: string, effet: number, desription: string) {
    this._nom = nom;
    this._effet = effet;
    this._desription = desription;
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
  public abstract appliqueObjet(pokemon: Pokemon): void;
}
