export default class AlterationInformation {
  public static readonly Abri = new AlterationInformation(
    "Abri",
    `Il existe plusieurs type d'abri:
    Abri complet:
      -Le pokémon ne subit aucun effet ou dégât des capacités du pokémon adverse pendant un tour
      -Les capacités Abri, Détection provoque un abri complet
    Abri partiel:
      -Le pokémon ne subit pas les effet ou dégâts de certaines capacités
      -Pico-défense: Protège des attaques offensives et enlève 12% de la vie du pokémon adverse en cas d'attaque de contact
      -Bouclier royal: Protège des attaques offensives et baisse l'attaque du pokémon adverse en cas d'attaque de contact
      -Blockhaus: Protège des attaques offensives et empoisonne le la pokémon adverse en cas d'attaque de contact
      -Tatamigaeshi: Protège le pokémon et son allié des attaques offensives
      -Prévention: Protège des attaques prioritaires
      -Garde large: Protège des attaques à cible multiple
      -Reflet magik: Renvoie les attaques non-offensives
    -La capacité Ruse casse les abris`
  );

  public static readonly AnneauHydro = new AlterationInformation(
    "AnneauHydro",
    `-Le pokémon affecté récupére 6% de ses pv à la fin du tour
    -La capacité Relais transmet l'Anneau Hydro`
  );

  public static readonly AntiSoin = new AlterationInformation(
    "Anti-soin",
    `-Le pokémon affecté ne peut plus regagner de pv à l'aide de Racine, Vampigraine, Anneau hydro, Rayon lune, Aurore, Atterrissage, Soin, Appels soins, Repos, E-coque, Voeu, Lait à boire, Paresse et Synthése
    -Les attaques volant de la vie au pokémon adverse, tel que Giga-sangsue, inflige toujours des dégats mais ne rendent plus de vie au lanceur
    -Les talents Absorb'Eau et Absorb'Volt ne fonctionne plus`
  );

  public static readonly ATerre = new AlterationInformation(
    "A terre",
    `-Le pokémon sous cet effet redeviendra sensible aux attaques de type Sol si il était de type Vol ou avec le talent Lévitation
    -Cette effet est obtenu grâce à l'attaque Anti-air ou Myria-Flèches
    -Si un pokémon obtient ce statut lors du premier tour de Vol, Rebond ou Chute-libre, il retournera au sol et la capacité en cours sera annulée`
  );

  public static readonly Attraction = new AlterationInformation(
    "Attraction",
    `La capacité Attraction ou le talent Joli sourire provoque l'attraction.
    La capacité Attraction ou le talent Joli sourire ne fonctionne que sur les pokémon de genre opposé (n'affecte pas les asexués).
    Le pokémon amoureux à 50% de chance d'attaquer`
  );

  public static readonly Cauchemar = new AlterationInformation(
    "Cauchemar",
    `-La capacité Cauchemar provoque cette altération
    -Si le pokémon est endormi, Cauchemar lui inflige 25% de sa vie à la fin du tour
    -Si le pokémon se réveille, Cauchemar disparait à la fin du tour`
  );

  public static readonly ChangementDeType = new AlterationInformation(
    "Changement de type",
    `-Le pokémon change de type ou gagne un type tant qu'il reste en jeu
    -Les talents Protéen et Déguisement ainsi que les capacités Flamme ultime, Détrempage, Halloween, Maléfice Sylvain, Conversion, Conversion 2 et Copie type permettent le changement de type`
  );

  public static readonly Clone = new AlterationInformation(
    "Clone",
    `-Clonage crée un clone du pokémon en sacrifiant 25% de sa vie qui en possédera le même nombre
    -Le clone prend les dégâts à la place du pokémon et empêche les altérations de statut, exceptées des capacités sonores et mentales
    -La capacité Relais transmet le clone`
  );

  public static readonly Confusion = new AlterationInformation(
    "Confusion",
    `-Le pokémon à 33% de chance de s'infliger des dégâts lorsqu'il attaque annulant ainsi sa capacité. Les dégâts reçu sont les même que ceux d'une attaque physique de 40 de puissance, sans type, calculée avec l'attaque du pokémon affecté
    -Les capacités Vantardise, Flatterie, Babil, Dynamopoing Danse folle, Ultrason et Onde folie rendent confus à coup sûr si elles touchent
    -Les baie Figuy, Wiki, Mago, Gowav, Papaya rendent confus le pokémon qui les consomme si il n'a pas la bonne nature`
  );

  public static readonly Embargo = new AlterationInformation(
    "Embargo",
    `Le pokémon affecté ne pourra plus utiliser d'objet pendant 5 tours`
  );

  public static readonly Encore = new AlterationInformation(
    "Encore",
    `-Dure 3 tours
    -Le pokémon affecté est obligé de refaire la même capacité durant toute la durée de l'effet`
  );

  public static readonly Entrave = new AlterationInformation(
    "Entrave",
    `-Le pokémon affecté ne peut plus utiliser la capacité entravée
    -La capacité Entrave ou la talent Corps maudit provoque l'entrave
    -Une seule capacité peut être entravée à la fois, si une entrave est déjà présente, Corps maudit ne s'activera pas et la capacité Entrave échoue`
  );

  public static readonly Identifie = new AlterationInformation(
    "Identifie",
    `-L'augmentation d'esquive du pokémon identifié est remise à zéro
    -Clairvoyance et Flair permettent aux attaques Combat et Normal de toucher le type Spectre
    -Oeil miracle permet aux attaques de type Psy de toucher le type Ténèbres`
  );

  public static readonly Levikinesie = new AlterationInformation(
    "Levikinesie",
    `-Le pokémon sous cet effet sera immunisé aux attaques de type Sol et aux Picots et Pics toxik
    -En contrepartie, les attaques lancées sur ce pokémon ne peuvent plus rater
    -Gravité et Anti-air annule la Lévikinésie. Racines ou l'objet Balle fer font échouer Lévikinésie`
  );

  public static readonly Malediction = new AlterationInformation(
    "Malediction",
    `-Le pokémon maudit perd 25% de ses pv à la fin du tour
    -La capacité Relais transmet la malédiction`
  );

  public static readonly Peur = new AlterationInformation(
    "Peur",
    `-Un pokémon apeuré ne peut pas utiliser de capacités
    -La peur ne dure qu'un tour
    -Le pokémon ne peut être apeuré que si l'adversaire attaque en premier
    -La capacité Bluff apeure à coup sûr si elle touche`
  );

  public static readonly Piege = new AlterationInformation(
    "Piege",
    `-Le pokémon piégé ne peut plus changer et reste en combat
    Il existe 2 types de piège:
    Les pièges actifs:
      -Les capacités Claquoir, Etreinte, Ligotage, Danse flamme, Harcélement, Siphon, Tourbi-sable et Vortex magma piége le pokémon touché
      -Le pokémon perd 12% de ses pv à la fin du tour
      -L'effet du piége dure de 2 à 5 tours suivant la capacité utilisée
      -La capacité Tour rapide libère le pokémon affecté
      -La capacité Relais permet de changer de pokémon mais transmet le piége
    Les pièges passifs:
      -Les capacités Regard noir, Barrage, Tisse ombre et Ancrage, ainsi que les talent Magnépiége, Piége sable et Marque ombre sont des pièges passifs
      -Les pokémons de type Spectre ne sont pas affecté par les piège passifs
    -L'objet Carapace mue permet de changer de pokémon malgré le piège`
  );

  public static readonly Possesif = new AlterationInformation(
    "Possesif",
    `-Le pokémon affecté ne peut plus utiliser les capacités qu'il a en commun avec le pokémon adverse`
  );

  public static readonly PrelevementDuDestin = new AlterationInformation(
    "Prelevement du destin",
    `-S'obtient avec la capacité Prélèvem. Destin
    -Si le porteur est mis KO par une attaque, le pokémon attaquant tombe KO à son tour
    -L'effet s'estompe si le porteur utilise une autre capacité
    -Rancune fonctionne sur le même principe mais retire tout les PP de l'attaque utilisée pour mettre KO`
  );

  public static readonly Provoc = new AlterationInformation(
    "Provoc",
    `-Dure 3 tours
    -Le pokémon affecté ne peut pas utiliser de capacités non-offensives
    -Si le pokémon n'as pas d'attaques non-offensives, il devra faire Lutte
`
  );

  public static readonly Racines = new AlterationInformation(
    "Racines",
    `-Le pokémon affecté récupère 6% de ses pv à la fin du tour
    -Le pokémon affecté ne peut plus se retirer et ne peut plus être forcé de changer par les capacités Hurlement, Cyclone et Draco-queue
    -La capacité Relais transmet les Racines`
  );

  public static readonly Requiem = new AlterationInformation(
    "Requiem",
    `-La capacité Requiem donne cette altération à tous les pokémons en jeu
    -Le pokémon affecté tombe KO au bout de 3 tours
    -La capacité Relais transmet le Requiem`
  );

  public static readonly Saisie = new AlterationInformation(
    "Saisie",
    `-Le pokémon sous l'effet de cette capacité volera les effets d'une attaque non-offensive de l'adversaire.
    -Ne fonctionne pas sur les capacités Coup d'main ou Géo-contrôle`
  );

  public static readonly Somnolent = new AlterationInformation(
    "Somnolent",
    `-Un pokémon rendu somnolent s'endormira à la fin du prochain tour
    -La capacité Baillement rend Somnolent si elle touche`
  );

  public static readonly Stockage = new AlterationInformation(
    "Stockage",
    `-S'obtient avec la capacité Stockage et peut être cumulé 3 fois
    -Affecte l'efficacité des capacités Avale et Relâche
    -Chaque niveau de Stockage augmente de 50% la défense et la défense spéciale du pokémon
    -La capacité Relais transmet les niveaux de Stockage`
  );

  public static readonly Tourmente = new AlterationInformation(
    "Tourmente",
    `-Le pokémon affecté ne peut pas utiliser deux fois la même capacité consécutivement
    -Si le pokémon ne peut pas utiliser une autre capacité au tour suivant, il devra faire Lutte`
  );

  public static readonly Vampigraine = new AlterationInformation(
    "Vampigraine",
    `-Le pokémon affecté perd 12% de ses pv à la fin du tour et le pokémon adverse récupére l'exact nombre de point de vie perdus de cette manière
    -L'attaque Tour rapide libère des Vampigraines
    -Les pokémons de type Plante sont immunisés aux Vampigraines
    -La capacité Relais transmet les Vampigraines`
  );

  public static readonly Verouillage = new AlterationInformation(
    "Verouillage",
    `-La prochaine attaque lancée sur le pokémon affecté ne pourra pas rater, quelque soit la précision, mais les immunités restent
    -Les capacités Verouillage et Lire-esprit provoque un verouillage`
  );

  public static readonly VolMagnetik = new AlterationInformation(
    "VolMagnetik",
    `-Le pokémon sous cet effet sera immunisé aux attaques de type Sol et aux Picots et Pics toxik pendant 5 tours
    -Les capacités Anti-air et Racines annulent le Vol magnétik
    -La Gravité fait échouer la capacité Vol magnétik et annule son effet
    -La capacité Relais transmet le Vol magnétik`
  );

  private constructor(
    public readonly nomAlteration: string,
    public readonly descriptionAlteration: string
  ) {}
}
