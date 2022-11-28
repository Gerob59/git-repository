type Chat = {
  nom: string;
  race: string;
  age: number;
  poid: number;
};

const chat: Chat = {
  nom: "pikachu",
  race: "europeen",
  age: 3,
  poid: 4,
};

function getChat(...surnoms: string[]): string {
  return `nom:${chat.nom}, race:${chat.race}, age:${chat.age}ans, poid:${
    chat.poid
  } kilos\nSes surnoms sont: ${surnoms.join(", ")}`;
}
console.log(getChat("chacha", "chachou", "pika", "gros tas"));
