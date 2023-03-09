import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { useState } from "react";
import Nav from './components/Nav';
import resources from './components/Ressurser'


function App() {
    const [currentTitleState, setCurrentTitleState] = useState("html");
    return (
      <div className="body">
        {/* <Tabs_UI /> */}
        <Header />
        <main id="main_content">
          <Nav
            resources={resources}
            currentTitle={currentTitleState}
            setCurrentTitle={setCurrentTitleState}
          />
          <hr />
          <Main
            resources={resources}
            currentTitle={currentTitleState}
            setCurrentTitle={setCurrentTitleState}
          />
        </main>
      </div>
    );
  }
export default App;
