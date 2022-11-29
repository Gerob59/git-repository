import Chat from "./Classes/Chat";
import Dauphin from "./Classes/Dauphin";

const monChat: Chat = new Chat("pikachu", 4, new Date("2019/11/06"));
monChat.display();

const monDauphin: Dauphin = new Dauphin("Flipper", 20, new Date("2017/02/20"));
monDauphin.display();
