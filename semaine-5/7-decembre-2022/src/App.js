import EmployeList from "./components/employe/EmployeList";
import EmployeDetailList from "./components/employe/EmployeDetailList";
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <EmployeList />
      <EmployeDetailList />
    </div>
  );
}
