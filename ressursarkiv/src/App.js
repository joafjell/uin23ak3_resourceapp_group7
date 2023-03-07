import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './css/main.css';
/*import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { HTML } from "./";
import { CSS } from "./";
import { Javascript } from "./";
import { React } from "./";
import { Sanity } from "./";
import { Navbarr } from "./components/Nav";*/




function App() {
    return(
        <Routes>
            <Layout/>       
        </Routes>
    );
}

export default App;
