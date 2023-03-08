import React from "react";
export default function MainContent(props) {
  const { resources, currentTitle } = props;

  // render inhold hver tabs
  const renderTabDetail = () => {
    const filterArr = resources.filter((item) => {
      return item.category.toUpperCase() === currentTitle.toUpperCase();
    });

    return filterArr.map((item, index) => {
      return (
        <a key={index} target="_blank" href={item.url}>
          {item.title}
        </a>
      );
    });
  };

  return (
    <section id="content">
      <h3>{currentTitle.toUpperCase()}</h3>

      <div id="link">{renderTabDetail()}</div>
    </section>
  );
}

/*export default function Main(){
    return (
        <article id= "content">
        <h3>HTML</h3>
        <div id="link">
          <a target="_blank" href="https://www.w3schools.com/html/">
            W3Schools</a>
          <a target="_blank" href="https://html.spec.whatwg.org/multipage/">
            HTML Living standard</a>
          <a target="_blank" href="https://html.com/"> HTML.com Tutorials</a>
        </div>

        </article>
        
        <article>
        <h3>CSS</h3>
        <div id="linkk">
        <a target="_blank" href="https://w3schools.com/css/"> 
        W3Schools</a>
        <a target="_blank" href="https://www.w3.org/standards/webdesign/htmlcss.html"> 
        W3C HTML and CSS standards</a>
        <a target="_blank" href="https://jigsaw.w3.org/css-validator/"> 
        W3C CSS validator</a>
        <a target="_blank" href="https://css-tricks.com/"> 
        CSS tricks</a>
        </div>
        </article>
        
        <article>
        <h3>Javascript</h3>
        <div id="linkkk">
        <a target="_blank" href="https://www.w3schools.com/js/">
        W3Schools</a>
        <a target="_blank" href="https://www.developer.mozilla.org/en-US/docs/Web/JavaScript">
        MDN Web Docs</a>
        <a target="_blank" href="https://www.youtube.com/watch?v=O3iR-CIufKM">
        How to read Javascript documentation</a>
        </div>
        </article>
        
        <article>
        <h3>React</h3>
        <div id="linkkkk">
        <a target="_blank" href="https://reactjs.org/docs/getting-started.html">
        React documentation</a>
        <a target="_blank" href="https://www.w3schools.com/REACT/DEFAULT.ASP">
        W3Schools</a>
        <a target="_blank" href="https://www.youtube.com/watch?v=O3iR-CIufKM">
        How to read Javascript Documentation</a>
        </div>
        </article>
        
        <article>
        <h3>Sanity and headless CMS</h3>
        <div id="linkkkkk">
        <a target"_blank" href="https://www.sanity.io/docs">
        Sanity Documentation</a>
        <a target="_blank" href="https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/">
        OnCrawl: a beginners guide to headless CMS</a>
        <a target="_blank" href="https://www.section.io/egineering-education/getting-started-with-sanity-cms/">
        Getting started wIth Sanity CMS</a>
        </div>
        </article>
        
    )
}*/