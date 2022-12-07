import Contact from "../Components/contact/Contact";
import personnes from "../Data";

export default function ContactList() {
  return (
    <>
      <div className="Contacts">
        {personnes.map((personne, index) => (
          <Contact key={index} {...personne} />
        ))}
      </div>
    </>
  );
}
