import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './css/main.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Home } from ".pages/Home"; 
import { Html } from ".pages/Html";
import { Css } from ".pages/Css";
import { Javascript } from ".pages/Javascript";
import { React } from ".pages/React";
import { Sanity } from ".pages/Sanity";
import { Nav } from "./components/Nav";




function App() {
    return(
        
           <div className="navigation">
    <Router>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/html" element={<Html />} />
    <Route path="/css" element={<Css />} />
    <Route path="/javascript" element={<Javascript />} />
    <Route path="/react" element={<React />} />
    <Route path="/sanity" element={<Sanity />} />
    </Routes>
    </Router>
    </div> 
    
        
        
        
        
        
        
        
        
        
        
        
     /*   <Routes>
            <Layout/>       
        </Routes>*/
    );
}

export default App;
