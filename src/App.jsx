// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Member from "./pages/Member";
import Home from "./pages/Home";
import Create from "./pages/Create";

import { Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/:id" element={<Member />} />
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </>
  );
}

export default App;
