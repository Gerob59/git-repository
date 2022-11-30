import Chat from "./Classes/Chat";
import Dauphin from "./Classes/Dauphin";
import Mammifere from "./Classes/Mammifere";
import MilieuNaturel from "./Interfaces/MilieuNaturel";

const monChat: Chat = new Chat("pikachu", 4, new Date("2019/11/06"));
const monDauphin: Dauphin = new Dauphin("Flipper", 20, new Date("2017/02/20"));

const mesAnimaux: any[] = [monChat, monDauphin];

mesAnimaux.forEach((animal) => animal.display());
mesAnimaux.forEach((animal) => animal.parler());
mesAnimaux.forEach((animal) => animal.deplacer());
mesAnimaux.forEach((animal) => animal.respirer());

monDauphin.retenirRespiration();
