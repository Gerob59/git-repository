import Statistiques from "./Statistique";

export default class Ev extends Statistiques {
  constructor() {
    super(
      Math.floor(Math.random() * 32),
      Math.floor(Math.random() * 32),
      Math.floor(Math.random() * 32),
      Math.floor(Math.random() * 32),
      Math.floor(Math.random() * 32),
      Math.floor(Math.random() * 32)
    );
  }
}
