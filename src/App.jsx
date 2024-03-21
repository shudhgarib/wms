import {Route, Routes} from "react-router-dom";
import "./App.css";
import {Navbar} from "./Components/Navbar";
import Footer from "./Components/Pages/Footer";

import {
  Home,
  View_List,
  Donate,
  Register,
  Book_Place,
  Gallery,
  About,
} from "./Components/Pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Book_Place" element={<Book_Place />} />
        <Route path="/View_List" element={<View_List />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
