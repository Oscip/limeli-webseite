import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar.jsx";
import Home from "./components/Home";
import Verteidigung from "./components/Verteidigung";
import WichtigePersoenlichkeiten from "./components/WichtigePersoenlichkeiten.jsx";
import HistorischeHintergruende from "./components/HistorischeHintergruende";
import NotFound from "./components/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';
import CustomCursor from "./components/Cursor/CustomCursor.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TermsService from "./components/TermsService.jsx";

export default function App() {
    return (
        <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <>
                <div className="main-content">
                    <CustomNavbar/>
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home/>} />
                            <Route path="/verteidigung" element={<Verteidigung />} />
                            <Route path="/wichtige-personlichkeiten" element={<WichtigePersoenlichkeiten />} />
                            <Route path="/historische-hintergruende" element={<HistorischeHintergruende />} />
                            <Route path="/datenschutzerklärung" element={<PrivacyPolicy/>} />
                            <Route path="/nutzungsbedingungen" element={<TermsService/>} />
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </>
        </Router>
    );
}
