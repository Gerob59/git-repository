import StatistiqueAbstrait from "./StatistiqueAbstrait";

export default class Iv extends StatistiqueAbstrait {
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
