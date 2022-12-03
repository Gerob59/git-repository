export default class StatutInformation {
  public static readonly BRULURE = new StatutInformation(
    "Brûlure",
    `-Réduit l'Attaque du pokémon de moitié
    -Le pokémon perd 6% de sa vie à la fin de chaque tour
    -Les capacités Feu d'enfer et Feu follet brûlent la cible à coup sûr si elles touchent
    -L'objet Orbe flamme brûle le porteur à la fin du tour
    -La capacité Aria de l'écume soigne la cible de la brûlure
    -Les pokémons de type Feu sont immunisés à la brûlure`
  );

  public static readonly EMPOISONNEMENT = new StatutInformation(
    "Empoisonnement",
    `Il existe 2 type de poison:
    Le poison normal:
        -Le pokémon perd 1/8 de ses pv (12%) à la fin de chaque tour
        -Les capacités Poudre toxic, Fil toxique et Gaz toxic empoisonnent à coup sûr si elles touchent
    Le poison grave:
        -Le pokémon perd 6% de sa vie plus 6% à chaque tour suivant (6, 12, 18, Etc...)
        -La capacité Toxik empoisonne gravement à coup sûr si elle touche
        -L'objet Orbe toxique empoisonne gravement le porteur à la fin du tour
    -Les pokémons de type Poison ou Acier sont immunisés au poison
    -Les Pics toxik empoisonnent normalement ou gravement également (Voir: Les Entry hazard (Lien à venir)`
  );

  public static readonly GEL = new StatutInformation(
    "Gel",
    `-Un pokémon gelé ne peut pas utiliser de capacités
    -A chaque fois qu'il attaque, le pokémon a 20% de chance de se dégeler
    -Si le pokémon utilise l'attaque Roue de feu, Feu sacré, Boutefeu, Ebullition ou Flamme croix sera dégelé lors de son tour
    -Les attaques de type Feu, ainsi qu'Ebullition dégèle la cible
    -Les pokémons de type Glace sont immunisés au gel`
  );

  public static readonly PARALYSIE = new StatutInformation(
    "Paralysie",
    `-Réduit la vitesse du pokémon de moitié
    -Le pokémon aura 25% de chance de passer son tour
    -Les capacités Elecanon, Regard médusant, Frotte-frimousse, Cage-Eclair et Para-spore paralysent à coup sûr si elles touchent
    -Les pokémons de type Electrik sont immunisés à la paralysie
    -La capacité Stimulant soigne la cible de la paralysie`
  );

  public static readonly SOMMEIL = new StatutInformation(
    "Sommeil",
    `-Le pokémon ne peut pas utiliser de capacité, à part Ronflement et Blabla dodo
    -Le pokémon dort de 1 à 3 tours
    -Il est vulnérable aux capacités Dévoréve et Cauchemard
    -Les capacités Spore, Berceuse, Siffl'herbe, Hypnose, Grobisou, Poudre dodo, Trou noir endorment les pokémon à coup sûr si elles touchent
    -Les attaques Force cachée et Chant antique sont les seules attaques pouvant endormir en effet secondaire
    -La capacité Repos endort le lanceur pendant 2 tours et lui redonne tout ses point de vie
    -La capacité Réveil forcé réveille la cible`
  );

  private constructor(
    public readonly nomStatut: string,
    public readonly descriptionStatut: string
  ) {}
}
