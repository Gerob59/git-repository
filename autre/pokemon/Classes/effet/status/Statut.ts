export default class Statut {
  public static readonly BRULURE = new Statut(
    "Brûlure",
    "L'attaque brûle le pokemon adverse"
  );

  public static readonly EMPOISONNEMENT = new Statut(
    "Empoisonnement",
    "Empoisonne le pokemon adverse"
  );

  public static readonly GEL = new Statut(
    "Gel",
    "L'attaque gel le pokemon adverse"
  );

  public static readonly PARALYSIE = new Statut(
    "Paralysie",
    "L'attaque paralyse le pokemon adverse"
  );

  public static readonly SOMMEIL = new Statut(
    "Sommeil",
    "L'attaque endort le pokemon adverse"
  );

  private constructor(
    public readonly nomStatut: string,
    public readonly descriptionStatut: string
  ) {}
}
