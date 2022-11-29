import MilieuNaturel from "./MilieuNaturel";

export default interface Aquatique extends MilieuNaturel {
  respirerSousLeau(): void;
  nager(): void;
}
