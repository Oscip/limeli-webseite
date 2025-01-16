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
import FooterComponent from "./Components/FooterComponent.jsx";
import Legal_Notice from "./pages/Legal_Notice.jsx";
import Terms_Condition from "./pages/Terms_Condition.jsx";


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
                    <Route path="/legal-notice" element={<Legal_Notice/>}/>
                    <Route path="/terms-&-condition" element={<Terms_Condition/>}/>
                    <Route path="/*" element={<NotFound/>} />
                </Routes>
            </div>
            <FooterComponent/>
        </Router>
    )
}

export default App
