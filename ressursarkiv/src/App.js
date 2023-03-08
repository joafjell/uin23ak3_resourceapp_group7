import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Information from './components/Information';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import Test from './components/Test';
import Test2 from './components/Test2';
w
function App() {

    return(
        <>
            <Nav />
            <Routes>
                <Route index path="/html" element={<Html/>} />
                <Route index path="/css" element={<Css />} />
            </Routes>
        </>
        
      
      
    )
    
}



/*const resources = [
  {
      title: "W3Schools",
      url: "https://www.w3schools.com/html/",
      category: "html"
  },
  {
      title: "W3Schools",
      url: "https://www.w3schools.com/css/",
      category: "css"
  },
  {
      title: "W3Schools",
      url: "https://www.w3schools.com/js/",
      category: "javascript"
  },
  {
      title: "W3Schools",
      url: "https://www.w3schools.com/REACT/DEFAULT.ASP",
      category: "react"
  },
  {
      title: "HTML Living standard",
      url: "https://html.spec.whatwg.org/multipage/",
      category: "html"
  },
  {
      title: "HTML.com Tutorials",
      url: "https://html.com/",
      category: "html"
  },
  {
      title: "W3C HTML & CSS Standards",
      url: "https://www.w3.org/standards/webdesign/htmlcss.html",
      category: "css"
  },
  {
      title: "W3C CSS Validator",
      url: "https://jigsaw.w3.org/css-validator/",
      category: "css"
  },
  {
      title: "CSS Tricks",
      url: "https://css-tricks.com/",
      category: "css"
  },
  {
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      category: "javascript"
  },
  {
      title: "How to read JavaScript Documentation",
      url: "https://www.youtube.com/watch?v=O3iR-CIufKM",
      category: "javascript"
  },
  {
      title: "React documentation",
      url: "https://reactjs.org/docs/getting-started.html",
      category: "react"
  },
  {
      title: "Sanity documentation",
      url: "https://www.sanity.io/docs",
      category: "headless-cms"
  },
  {
      title: "OnCrawl: a beginners guide to headless CMS",
      url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/",
      category: "headless-cms"
  },
  {
      title: "Section.io: Getting started with Sanity CMS",
      url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/",
      category: "headless-cms"
  }
];/*



/*function App(props) {
  const [currentTitleState, setCurrentTitleState] = useState("html");
  return (
    
    <div className="body">
      {/* <Tabs_UI /> }*/
     /*<Header />
      <main id="main_content">
        <NavBar
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
}*/
>>>>>>> a4a7bf779bff8db2c9bd3e17318896adc8a08b2b

export default App;
