import EmployeData from "../../data";
import Employe from "./Employe";
export default function EmployeList() {
  return (
    <>
      <div className="Employes">
        {EmployeData.map((personne, index) => (
          <Employe key={index} {...personne} />
        ))}
      </div>
    </>
  );
}
