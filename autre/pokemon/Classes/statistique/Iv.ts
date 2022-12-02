import Statistiques from "./Statistique";

export default class Iv extends Statistiques {
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
