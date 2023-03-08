import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './css/main.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { HTML } from ".components/HTML";
import { CSS } from ".components/CSS";
import { Javascript } from ".components/Javascript";
import { React } from ".components/React";
import { Sanity } from ".components/Sanity";
import { Navbarr } from "./components/Navbarr";




function App() {
    return(
        
           <div className="navigation">
    <Router>
    <Navbarr />
    <Routes>
    /*<Route path="/" element={<Home />} />*/
    <Route path="/html" element={<HTML />} />
    <Route path="/css" element={<CSS />} />
    <Route path="/javascript" element={<Javascript />} />
    <Route path="/react" element={<React />} />
    <Route path="/sanity" element={<Sanity />} />
    </Routes>
    </Router>
    </div> 
    
        
        
        
        
        
        
        
        
        
        
        
        <Routes>
            <Layout/>       
        </Routes>
    );
}

export default App;
