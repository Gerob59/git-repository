import { Collaborateur } from "./Collaborateur";

export interface Remunerer extends Collaborateur {
  salaire: number;
  augmentation(pourcentage: number): void;
}
