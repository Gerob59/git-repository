import Note from "./Note";
import Bulletin from "./Bulletin";
import Eleve from "./Eleve";

const bulletin: Bulletin = new Bulletin();
const eleve: Eleve = new Eleve("Cover", "Harry", bulletin);

const note1: Note = new Note("POO", 20);
const note2: Note = new Note("TypeScript", 15);
const note3: Note = new Note("Javascript", 5);
const note4: Note = new Note("UML", 18);
const note5: Note = new Note("PHP", 0);
eleve.ajouterNotes(note1, note2, note3, note4, note5);

console.log(eleve.afficherNotes());
console.log(eleve.afficherMoyenne());
