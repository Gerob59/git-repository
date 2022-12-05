import Type from "../../Interfaces/Type";
import TypeEnum from "./TypeEnum";
import Acier from "./Acier";
import Combat from "./Combat";
import Dragon from "./Dragon";
import Eau from "./Eau";
import Electrique from "./Electrique";
import Fee from "./Fee";
import Feu from "./Feu";
import Glace from "./Glace";
import Insecte from "./Insecte";
import Normal from "./Normal";
import Plante from "./Plante";
import Poison from "./Poison";
import Psy from "./Psy";
import Roche from "./Roche";
import Sol from "./Sol";
import Spectre from "./Spectre";
import Tenebres from "./Tenebres";
import Vol from "./Vol";

export default class TypeFactory {
  private _type: Type;

  constructor(typePokemon: TypeEnum) {
    if (typePokemon === TypeEnum.ACIER) {
      this._type = new Acier();
    } else if (typePokemon === TypeEnum.COMBAT) {
      this._type = new Combat();
    } else if (typePokemon === TypeEnum.DRAGON) {
      this._type = new Dragon();
    } else if (typePokemon === TypeEnum.EAU) {
      this._type = new Eau();
    } else if (typePokemon === TypeEnum.ELECTRIQUE) {
      this._type = new Electrique();
    } else if (typePokemon === TypeEnum.FEE) {
      this._type = new Fee();
    } else if (typePokemon === TypeEnum.FEU) {
      this._type = new Feu();
    } else if (typePokemon === TypeEnum.GLACE) {
      this._type = new Glace();
    } else if (typePokemon === TypeEnum.INSECTE) {
      this._type = new Insecte();
    } else if (typePokemon === TypeEnum.NORMAL) {
      this._type = new Normal();
    } else if (typePokemon === TypeEnum.PLANTE) {
      this._type = new Plante();
    } else if (typePokemon === TypeEnum.POISON) {
      this._type = new Poison();
    } else if (typePokemon === TypeEnum.PSY) {
      this._type = new Psy();
    } else if (typePokemon === TypeEnum.ROCHE) {
      this._type = new Roche();
    } else if (typePokemon === TypeEnum.SOL) {
      this._type = new Sol();
    } else if (typePokemon === TypeEnum.SPECTRE) {
      this._type = new Spectre();
    } else if (typePokemon === TypeEnum.TENEBRES) {
      this._type = new Tenebres();
    } else if (typePokemon === TypeEnum.VOL) {
      this._type = new Vol();
    }
  }

  public get type(): Type {
    return this._type;
  }
}
