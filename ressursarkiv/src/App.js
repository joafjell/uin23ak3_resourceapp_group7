import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './css/main.css';

function App() {
    return(
        <Routes>
            <Layout/>       
        </Routes>
    );
}

export default App;