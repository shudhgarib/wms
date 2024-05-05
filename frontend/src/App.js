import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Donate from "./components/Pages/Donate";
import Home from "./components/Pages/Home";
import Book_Place from "./components/Pages/Book_Place";
import View_list from "./components/Pages/View_list";
import About from "./components/Pages/About";
import Work from "./components/Pages/Work";
import Contact from "./components/Pages/Contact";
import Admin from "./components/Pages/Admin";
import Gallery from "./components/Pages/Gallery";
import Navbarmenu from "./components/menu/Navbarmenu";
import Footer from "./components/Pages/Footer";
import {NextGallery} from "./components/Pages/NextGallery";
import TowK24 from "./components/Pages/Subpage/TowK24";
import TowK23 from "./components/Pages/Subpage/TowK23";
import TowK22 from "./components/Pages/Subpage/TowK22";
import Welcome from "./components/Pages/Welcome";
import Adminpanel from "./components/Pages/Admin_panel";
import Add from "./components/Pages/Add";

function App() {
  return (
    <>
      <div className="App">
        <Router basename="/">
          <Navbarmenu />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/Pages/Donate" element={<Donate />} />
            <Route exact path="/Pages/Book_Place" element={<Book_Place />} />
            <Route exact path="/Pages/View_list" element={<View_list />} />
            <Route exact path="/Pages/About" element={<About />} />
            <Route exact path="/Pages/Work" element={<Work />} />
            <Route exact path="/Pages/Contact" element={<Contact />} />
            <Route exact path="/Pages/Admin" element={<Admin />} />
            <Route exact path="/Pages/Gallery" element={<Gallery />} />
            <Route exact path="/NextGallery" element={<NextGallery />} />
            <Route exact path="/Welcome" element={<Welcome />} />
            <Route exact path="/TowK24" element={<TowK24 />} />
            <Route exact path="/TowK23" element={<TowK23 />} />
            <Route exact path="/TowK22" element={<TowK22 />} />
            <Route exact path="/admin-panel" element={<Adminpanel />} />
            <Route exact path="/add-donor" element={<Add />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
export default App;
