import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home.jsx";
import Drinks from "./pages/Drinks.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import NavbarComponent from "./Components/NavbarComponent.jsx";
import NotFound from "./pages/NotFound.jsx";
import Blog from "./pages/Blog.jsx";


function App() {

    return (
        <Router>
            <NavbarComponent/>
            <div>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/drinks" element={<Drinks/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/*" element={<NotFound/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
