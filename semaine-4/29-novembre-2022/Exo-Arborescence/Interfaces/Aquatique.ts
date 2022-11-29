import MilieuNaturel from "./MilieuNaturel";

export default interface Aquatique extends MilieuNaturel {
  respirerSousEau(): void;
  nager(): void;
}
