import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Desktop from "./components/Desktop/Desktop"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/desktop" element={<Desktop />} />
    </Routes>
  );
}

export default App;
