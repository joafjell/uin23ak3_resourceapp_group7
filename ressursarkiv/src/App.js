import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import resources from './resource/resources';
import {Route, Routes} from 'react-router-dom'


function App() {
  
  return (  
        <Routes>
          <Route index element={<Header />} />
          <Route path=':title' element={<Main recipes={resources} />}/>
        </Routes>
      );
}

export default App;
