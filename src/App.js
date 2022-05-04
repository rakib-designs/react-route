import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./style/Global.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/blogs" element={ <Blogs/> }/>
        <Route path="/blogs/:id" element={ <Blog/> }/>
        <Route path="/about-us" element={ <Home/> }/>
        <Route path="/contact-us" element={ <Home/> }/>
      </Routes>
    </div>
  );
}

export default App;
