import Paralysie from "./Classes/effet/status/Paralysie";
import Attaque from "./Interfaces/Attaque";
import TypeEnum from "./Classes/type/TypeEnum";
import AttaquePhysique from "./Classes/attaque/attaquePhysique/AttaquePhysique";

import AttaqueSpeciale from "./Classes/attaque/attaqueSpeciale/AttaqueSpeciale";
import TypeFactory from "./Classes/type/TypeFactory";
import Pokemon from "./Classes/pokemon/Pokemon";
import Statistique from "./Classes/statistique/Statistique";
import Effet from "./Interfaces/Effet";

const para: Effet = new Paralysie();

const charge: Attaque = new AttaquePhysique(
  "charge",
  TypeFactory.createType(TypeEnum.NORMAL),
  30,
  35,
  100,
  "attaque banal",
  para
);
/*
console.log(
  `nom:${attaque.nomAttaque}, pp:${attaque.ppAttaque}, précision:${attaque.precisionAttaque}, type:${attaque.typeAttaque.nomType}, puissance:${attaque.puissanceAttaque}, description:${attaque.descriptionAttaque}, statut:[ nom:${attaque.infligeStatus.nomEffet}, description:${attaque.infligeStatus.descriptionEffet}]`
);
*/

const statsPikachu: Statistique = new Statistique(35, 55, 40, 50, 50, 90);
const pkm: Pokemon = new Pokemon(
  "Pikachu",
  statsPikachu,
  [
    new AttaqueSpeciale(
      "éclair",
      TypeFactory.createType(TypeEnum.ELECTRIQUE),
      30,
      40,
      100,
      "lance éclair",
      para
    ),
    new AttaquePhysique(
      "charge",
      TypeFactory.createType(TypeEnum.NORMAL),
      30,
      35,
      100,
      "attaque banal",
      para
    ),
  ],
  TypeFactory.createType(TypeEnum.ELECTRIQUE),
  undefined
);
console.log(
  `nom:${pkm.nomPokemon}, nature:${pkm.nature._nomNature}, type[1:${pkm.typePrincipale.nomType}, 2:${pkm.typeSecondaire?.nomType}], pv[Inne:${pkm.statistiqueInnee.pv}, Finale:${pkm.statsFinale.pv}], atk [1:${pkm.attaques[0].nomAttaque}, 2:${pkm.attaques[1].nomAttaque}]`
);
