import { Routes, Route, Link } from "react-router-dom";
import Calculator1 from "./pages/Calculator1";
import Calculator2 from "./pages/Calculator2";
import Calculator3 from "./pages/Calculator3";
import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <img src="/image.png" className="logo"/>
        <span className="title">Kitty Kalculator</span>
        <nav>
          <Link to="/" className="tab">1</Link>
          <Link to="/calc2" className="tab">2</Link>
          <Link to="/calc3" className="tab">3</Link>
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Calculator1 />} />
        <Route path="/calc2" element={<Calculator2 />} />
        <Route path="/calc3" element={<Calculator3 />} />
      </Routes>
    </div>
  );
}

export default App;
