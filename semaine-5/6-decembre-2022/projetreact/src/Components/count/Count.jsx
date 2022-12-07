import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const click = () => setCount(count + 1);
  return (
    <>
      <p>{count}</p>
      <button onClick={click}> +1 </button>
    </>
  );
}
