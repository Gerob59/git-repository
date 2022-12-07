import Pokemon from "../pokemon/Pokemon";

export default abstract class Objet {
  protected _nom: string;
  protected _desription: string;

  constructor(nom: string, desription: string) {
    this._nom = nom;
    this._desription = desription;
  }

  public get nom(): string {
    return this._nom;
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
