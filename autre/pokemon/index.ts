import Paralysie from "./Classes/effet/status/Paralysie";
import Attaque from "./Interfaces/Attaque";
import TypeEnum from "./Classes/type/TypeEnum";
import AttaquePhysique from "./Classes/attaque/attaquePhysique/AttaquePhysique";
import AttaqueSpeciale from "./Classes/attaque/attaqueSpeciale/AttaqueSpeciale";
import TypeFactory from "./Classes/type/TypeFactory";
import Pokemon from "./Classes/pokemon/Pokemon";
import Statistique from "./Classes/statistique/Statistique";

const charge: Attaque = new AttaquePhysique(
  "charge",
  TypeFactory.createType(TypeEnum.NORMAL),
  30,
  35,
  100,
  "attaque banal",
  new Paralysie()
);

const pkm: Pokemon = new Pokemon(
  "Pikachu",
  new Statistique(35, 55, 40, 50, 50, 90),
  [
    new AttaqueSpeciale(
      "éclair",
      TypeFactory.createType(TypeEnum.ELECTRIQUE),
      30,
      40,
      100,
      "lance éclair",
      new Paralysie()
    ),
    charge,
  ],
  TypeFactory.createType(TypeEnum.ELECTRIQUE),
  undefined
);
console.log(
  `nom:${pkm.nomPokemon}, nature:${pkm.nature._nomNature}, type[1:${pkm.typePrincipale.nomType}, 2:${pkm.typeSecondaire?.nomType}], pv[Inne:${pkm.statistiqueInnee.pv}, Finale:${pkm.statsFinale.pv}], atk [nom1:${pkm.attaques[0].nomAttaque}, effet1:${pkm.attaques[0].infligeStatus?.nomEffet} // nom2:${pkm.attaques[1].nomAttaque}, effet2:${pkm.attaques[1].infligeStatus?.nomEffet}]`
);
