import {Route, Routes} from "react-router-dom";
import "./App.css";
import {Navbar} from "./Components/Navbar";
import Footer from "./Components/Pages/Footer";

import {
  Home,
  View_List,
  Donate,
  Reserve,
  Gallery,
  More,
} from "./Components/Pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Reserve" element={<Reserve />} />
        <Route path="/View_List" element={<View_List />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/More" element={<More />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
