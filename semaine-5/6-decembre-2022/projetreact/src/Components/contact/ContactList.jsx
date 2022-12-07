import Contact from "./Contact";
import { Link } from "react-router-dom";
import personnes from "../../Data";

export default function ContactList() {
  return (
    <>
      <div className="Contacts">
        <Link to={"/count"}>count</Link>
        {personnes.map((personne, index) => (
          <Contact key={index} {...personne} />
        ))}
      </div>
    </>
  );
}
