import EmployeData from "../../data";
import Employe from "./Employe";
import EmployeDetail from "./EmployeDetail";

export default function EmployeDetailList() {
  return (
    <div className="EmployeDetail">
      {EmployeData.map((personne, index) => (
        <>
          <Employe key={index} {...personne} />
          <EmployeDetail key={index} {...personne} />
        </>
      ))}
    </div>
  );
}
