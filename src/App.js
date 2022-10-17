import { useState } from "react";

import UseEffectHook from "./components/UseEffectHook";
import User from "./components/User";

function App() {
  // const [show, setShow] = useState(true)
  return (
    <div className="container text-center mt-4">
      {/* <button className="btn btn-dark" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      
     {show && <UseEffectHook />} */}
      <User/>
    </div>
  );
}

export default App;
