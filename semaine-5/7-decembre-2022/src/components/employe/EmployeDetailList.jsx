import EmployeData from "../../data";
import EmployeDetail from "./EmployeDetail";

export default function EmployeDetailList() {
  return (
    <>
      {EmployeData.map((personne, index) => (
        <EmployeDetail key={index} {...personne} />
      ))}
    </>
  );
}
