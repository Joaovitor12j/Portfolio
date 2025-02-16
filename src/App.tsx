import { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About.tsx";
import Projects from "./components/Projects/Projects.tsx";
import ResumeNew from "./components/Resume/ResumeNew.tsx";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Analytics />
                <SpeedInsights />
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre-mim" element={<About />} />
                    <Route path="/projetos" element={<Projects />} />
                    <Route path="/curriculo" element={<ResumeNew />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
