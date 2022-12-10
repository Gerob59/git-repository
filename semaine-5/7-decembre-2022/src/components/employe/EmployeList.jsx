import EmployeData from "../../data";
import Employe from "./Employe";
export default function EmployeList() {
  return (
    <>
      <div className="EmployeList">
        {EmployeData.map((personne, index) => (
          <Employe key={index} {...personne} />
        ))}
      </div>
    </>
  );
}
