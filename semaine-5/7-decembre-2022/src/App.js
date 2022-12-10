import "./reset.css";
import "./app.css";
import HomePage from "./page/HomePage"
import EmployePage from "./page/EmployePage"

export default function App() {
  return (
    <div className="App">
      <div className="HomePage">
        <HomePage />
      </div>
      <div className="EmployePage">
        <EmployePage />
      </div>
    </div>
  );
}
