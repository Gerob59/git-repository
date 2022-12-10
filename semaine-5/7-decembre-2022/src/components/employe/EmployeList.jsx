import EmployeData from "../../data";
import Employe from "./Employe";
export default function EmployeList({ clicked, click }) {
  return (
    <>
      <div className="EmployeList">
        {EmployeData.map((personne, index) => (
          <Employe key={index} {...personne} etat={clicked} onClick={click} />
        ))}
      </div>
    </>
  );
}
