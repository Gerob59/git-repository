import { useState } from "react";
import { Link } from "react-router-dom";

export default function Count() {
  const [count, setCount] = useState(0);
  const click = () => setCount(count + 1);
  return (
    <>
      <Link to={"/contact"}>contact</Link>
      <p>{count}</p>
      <button onClick={click}> +1 </button>
    </>
  );
}
