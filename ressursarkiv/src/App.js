import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { useState } from "react";
import Nav from './components/Nav';
import './css/main.css';
import resources from './components/Ressurser';
import Layout from './components/Layout';


function App() {
    <Layout>
        <Routing />
    </Layout>
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