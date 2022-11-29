import MilieuNaturel from "./MilieuNaturel";

export default interface Terrestre extends MilieuNaturel {
  RespirerHorsDeLEau(): void;
  marcher(): void;
}
