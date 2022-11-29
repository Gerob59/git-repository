import { Collaborateur } from "./Collaborateur";

export interface DureeLimite extends Collaborateur {
  finContract: Date;
  prolonger(jours: number): void;
}
