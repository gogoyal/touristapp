
import "./App.css";
import "bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/layout/home"
import NavBar from "./components/layout/navbar"
import Footer from "./components/layout/footer"
import Contact from "./components/layout/contact";
import TaskDetails from "./components/layout/details";
function App() {
  return (
    <>
    <NavBar />
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/details/:id" element={<TaskDetails/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
