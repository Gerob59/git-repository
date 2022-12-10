import EmployeData from "../../data";
import Employe from "./Employe";
import EmployeDetail from "./EmployeDetail";

export default function EmployeDetailList({ clicked, click }) {
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
/*
{clicked ? (
  <EmployeDetail
    key={index}
    {...personne}
    etat={clicked}
    onClick={click}
  />
) : (
  ""
)}
{clicked ? (
   <Employe key={index} {...personne} etat={clicked} onClick={click} />
) : (
  ""
 )}
*/
