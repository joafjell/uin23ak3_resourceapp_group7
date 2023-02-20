import './App.css';
import './css/main.css';

function App() {
  return (
    <div class="container">
        <header id="header">
            <a href="index.html" id="title">
                <h1>RESSURSARKIV</h1>
            </a>
        </header>
        <nav>
            <a id="CSS" onClick="renderCategory(event.target.id)">CSS</a>
            <a id="HTML" onClick="renderCategory(event.target.id)">HTML</a>
            <a id="JavaScript" onClick="renderCategory(event.target.id)">javascript</a>
            <a id="React" onClick="renderCategory(event.target.id)">React</a>
            <a id="Sanity and headless CMS" onClick="renderCategory(event.target.id)">Sanity and Headless CMS</a>
        </nav>
        <main>
            <section>
                <article id="Info">

                </article>
            </section>
        </main>
    </div>

  );
}

export default App;
