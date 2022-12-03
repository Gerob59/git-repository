export default class StatutInformation {
  public static readonly BRULURE = new StatutInformation(
    "Brûlure",
    "L'attaque brûle le pokemon adverse"
  );

  public static readonly EMPOISONNEMENT = new StatutInformation(
    "Empoisonnement",
    "Empoisonne le pokemon adverse"
  );

  public static readonly GEL = new StatutInformation(
    "Gel",
    "L'attaque gel le pokemon adverse"
  );

  public static readonly PARALYSIE = new StatutInformation(
    "Paralysie",
    "L'attaque paralyse le pokemon adverse"
  );

  public static readonly SOMMEIL = new StatutInformation(
    "Sommeil",
    "L'attaque endort le pokemon adverse"
  );

  private constructor(
    public readonly nomStatut: string,
    public readonly descriptionStatut: string
  ) {}
}
