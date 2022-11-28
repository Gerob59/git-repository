class Chat {
  nom!: string;
  race!: string;
  age!: number;
  poid!: number;
  afficherChat(): string {
    return `nom:${this.nom}, race:${this.race}, age:${this.age}ans, poid:${this.poid}kilos`;
  }
}

const chat: Chat = new Chat();
chat.nom = "Pikachu";
chat.race = "europeen";
chat.age = 3;
chat.poid = 4;

console.log(chat.afficherChat());
