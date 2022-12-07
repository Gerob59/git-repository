import "./reset.css";
import "./app.css";
import Contact from "./Components/contact/Contact";
import Count from "./Components/Count";
import personnes from "./Data";

export default function App() {
  return (
    <>
      <Count />
      <div className="Contacts">
        {personnes.map((personne, index) => (
          <Contact key={index} {...personne} />
        ))}
      </div>
    </>
  );
}
