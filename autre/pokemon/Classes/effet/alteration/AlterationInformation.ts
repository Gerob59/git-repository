export default class AlterationInformation {
  public static readonly Abri = new AlterationInformation("Abri", "");
  public static readonly AnneauHydro = new AlterationInformation(
    "AnneauHydro",
    ""
  );
  public static readonly AntiSoin = new AlterationInformation("Anti-soin", "");
  public static readonly ATerre = new AlterationInformation("A terre", "");
  public static readonly Attraction = new AlterationInformation(
    "Attraction",
    ""
  );
  public static readonly Cauchemar = new AlterationInformation("Cauchemar", "");
  public static readonly ChangementDeType = new AlterationInformation(
    "Changement de type",
    ""
  );
  public static readonly Clone = new AlterationInformation("Clone", "");
  public static readonly Confusion = new AlterationInformation("Confusion", "");
  public static readonly Embargo = new AlterationInformation("Embargo", "");
  public static readonly Encore = new AlterationInformation("Encore", "");
  public static readonly Entrave = new AlterationInformation("Entrave", "");
  public static readonly Identifie = new AlterationInformation("Identifie", "");
  public static readonly Levikinesie = new AlterationInformation(
    "Levikinesie",
    ""
  );
  public static readonly Malediction = new AlterationInformation(
    "Malediction",
    ""
  );
  public static readonly Peur = new AlterationInformation("Peur", "");
  public static readonly Piege = new AlterationInformation("Piege", "");
  public static readonly Possessif = new AlterationInformation("Possessif", "");
  public static readonly PrelevementDuDestin = new AlterationInformation(
    "Prelevement du destin",
    ""
  );
  public static readonly Provoc = new AlterationInformation("Provoc", "");
  public static readonly Racines = new AlterationInformation("Racines", "");
  public static readonly Requiem = new AlterationInformation("Requiem", "");
  public static readonly Saisie = new AlterationInformation("Saisie", "");
  public static readonly Somnolent = new AlterationInformation("Somnolent", "");
  public static readonly Stockage = new AlterationInformation("Stockage", "");
  public static readonly Tourmente = new AlterationInformation("Tourmente", "");
  public static readonly Vampigraine = new AlterationInformation(
    "Vampigraine",
    ""
  );
  public static readonly Verouillage = new AlterationInformation(
    "Verouillage",
    ""
  );
  public static readonly VolMagnetik = new AlterationInformation(
    "VolMagnetik",
    ""
  );

  private constructor(
    public readonly nomAlteration: string,
    public readonly descriptionAlteration: string
  ) {}
}
